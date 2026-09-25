import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmails = {
  sendMail: async ({ from, to, subject, html }) => {
    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to,
        subject,
        html,
      });
      console.log("Email sent successfully:", data);
      return data;
    } catch (error) {
      console.error("Email send error:", error);
      throw error;
    }
  },
};