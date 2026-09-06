import userModel from "../model/user.model.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
import "dotenv/config"
import crypto from "crypto";
import { sendEmails } from "../config/sendEmails.js";




export const signup = async (req, res) => {
    try {
        const { name, email, password, isAgree } = req.body;

        if (!name || !email || !password || !isAgree) {
            return res.status(400).json({
                success: false,
                message: "plz required all fields"
            })
        }



        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "email alredy exist, use a different email"
            })

        }
        const hashPassword = await bcryptjs.hash(password, 8)

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        const hashOTP = await bcryptjs.hash(otp, 6)

        const newuser = await userModel.create({
            name,
            email,
            password: hashPassword,
            isAgree,
            otp: hashOTP,
            otpExpire: new Date(Date.now() + 5 * 60 * 1000)
        })

        await sendEmails.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Al Hafiz Online - Email Verification",
            html: `<div style=" max-width: 500px; margin: auto; padding: 30px; font-family: Arial, sans-serif; text-align: center; border: 1px solid #eee; border-radius: 12px;">
            <h2 style="margin-bottom: 10px;"> Welcome ${name}</h2>
            <p>Your verification code is:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 25px 0; ">
               ${otp}
            </div>
            <p style="color: #666;"> This OTP will expire in 5 minutes.</p>
            </div>`
        })



        res.status(201).json({
            success: true,
            message: "account created. OTP send your mail"
        })



    } catch (error) {
        console.log("SIGNUP ERROR:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


export const verifyOTP = async (req, res) => {
    const { otp, email } = req.body

    if (!otp || !email) {
        return res.status().json({
            success: false,
            message: "email and OTP are required"
        })
    }

    const existingUser = await userModel.findOne({ email })
    if (!existingUser) {
        return res.status(401).json({
            success: false,
            message: "user do not found"
        })
    }


    if (existingUser.isVerified) {
        return res.status().json({
            success: false,
            message: "email already verified"
        })
    }

    if (existingUser.otpExpire < new Date()) {

        return res.status().json({
            success: false,
            message: "Otp has expired. Plz resend otp"
        })

    }

    const isMatchedOTP = await bcryptjs.compare(otp, existingUser.otp)

    if (!isMatchedOTP) {

        return res.status(400).json({
            success: false,
            message: "OTP Not Matched.",
        });

    }


    existingUser.isVerified = true;

    existingUser.otp = null;

    existingUser.otpExpire = null;

    await existingUser.save();

    return res.status(200).json({
        success: true,
        message: "OTP verify Successfully!"
    })
}


export const resendOTP = async (req, res) => {
    const { email } = req.body
    if (!email) {
        return res.status(400).json({
            success: false,
            message: "Email is required"
        });
    }


    const existingUser = await userModel.findOne({ email })

    if (!existingUser) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }


    if (existingUser.isVerified) {
        return res.status(400).json({
            success: false,
            message: "Email already verified"
        });
    }


    const otp = Math.floor(100000 + Math.random() * 900000).toString()


    const hashOTP = await bcryptjs.hash(otp, 6)

    existingUser.otp = hashOTP;

    existingUser.otpExpire = new Date(Date.now() + 5 * 60 * 1000).toString()

    await existingUser.save();

    await sendEmails.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Al Hafiz Online - Email Verification",
        html: `<div style=" max-width: 500px; margin: auto; padding: 30px; font-family: Arial, sans-serif; text-align: center; border: 1px solid #eee; border-radius: 12px;">
            <h2 style="margin-bottom: 10px;"> Welcome ${existingUser.name}</h2>
            <p>Your verification code is:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 25px 0; ">
               ${otp}
            </div>
            <p style="color: #666;"> This OTP will expire in 5 minutes.</p>
            </div>`
    })


    return res.status(200).json({
        success: true,
        message: "New OTP sent successfully"
    });


}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "plz required all fields"
            })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "user do not exist please signup"
            })
        }


        if (!user.isVerified) {
            return res.status().json({
                success: false,
                message: "Please verify your account first"
            })

        }

        const isMatch = await bcryptjs.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "password do not match"
            })
        }


        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        )

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: "logIn successfully",
            user: {
                role: user.role
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error",
        })

    }

}



export const logOut = async (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict"
    })

    return res.status(200).json({
        success: true,
        message: "logOut successfully!"
    })

}

export const userProfile = async (req, res) => {
    console.log("my req user", req.user);


    res.json({
        success: true,
        message: "my req user",
        user: req.user
    })


}


export const updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body;

        const existingUser = await userModel.findById(req.user._id);

        existingUser.name = name;
        existingUser.email = email;

        await existingUser.save();

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            existingUser,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile update failed",
        });
    }
};


export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(201).json({
                success: false,
                message: "eamil is required"
            })
        }

        const existingUser = await userModel.findOne({ email })
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: "user not found"
            })
        }

        //  Generate random reset token
        const resetPasswordToken = crypto.randomBytes(26).toString("hex")

        const hashToken = crypto.createHash("sha256").update(resetPasswordToken).digest("hex");

        existingUser.resetPasswordToken = hashToken;

        existingUser.resetPasswordExpire = new Date(Date.now() + 5 * 60 * 1000).toString()


        await existingUser.save()

        const resetUrl = `http://localhost:5173/reset-password/${resetPasswordToken}`;


        await sendEmails.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Al Hafiz Online - Reset Your Password",
            html: `<div style="max-width: 500px; margin: auto; padding: 30px; font-family: Arial, sans-serif;
            text-align: center; border: 1px solid #eee; border-radius: 12px; background: #f8f6ef;">
            <h2 style=" color: #0a5c3a; margin-bottom: 20px;">Reset Your Password </h2>
            <p style="color: #555;font-size: 16px;"> Dear ${existingUser.name},</p>
          <p style="color: #555; font-size: 16px;">
            To reset your password click on the following button:
          </p>
          <div style="margin: 30px 0;">
            <a href="${resetUrl}" style=" background: #0a5c3a; color: white; padding: 14px 40px; 
            text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;
             display: inline-block;">
              Reset Password
            </a>
          </div>

          <p style="color: #999;font-size: 14px;">This link will expire in 15 minutes.</p>
          <p style=" color: #999; font-size: 12px; margin-top: 20px;">
           If you didn't request this, please ignore this email.
          </p>
          <hr style=" border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style=" color: #aaa; font-size: 12px; ">  
           Al Hafiz Online - Learn Quran Online
          </p>
        </div>`
        });

        return res.status(200).json({
            success: true,
            message: "Password reset link sent to your email"
        });
    } catch (error) {

        console.log("FORGOT PASSWORD ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }

}



export const resetPassword = async (req, res) => {
    try {
        //  Token URL se aa raha hai
        const { token } = req.params;

        const { password } = req.body;

        if (!token) {
            return res.status(400).json({
                success: false,
                message: "Reset token is required"
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required"
            });
        }

        //  URL wale token ko hash karo
        const hashedToken = crypto
            .createHash("sha256")
            .update(token)
            .digest("hex");

        //  Token + expiry check
        const user = await userModel.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: new Date() }
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired reset link"
            });
        }

        //  New password hash
        const hashPassword = await bcryptjs.hash(password, 8);

        user.password = hashPassword;

        //  Token remove after successful reset
        user.resetPasswordToken = null;
        user.resetPasswordExpire = null;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully"
        });

    } catch (error) {
        console.log("RESET PASSWORD ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};