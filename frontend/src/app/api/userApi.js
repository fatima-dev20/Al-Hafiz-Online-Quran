import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
export const authApi = createApi({
   reducerPath: "authApi",

   baseQuery: fetchBaseQuery({
      baseUrl:"/api/v1/user",
      credentials: "include"
   }),

   tagTypes: ["Profile"],

   endpoints: (builder) => ({
      signUp: builder.mutation({
         query: (credentials) => ({
            url: "/signup",
            method: "POST",
            body: credentials
         })
      }),


      otpVerify: builder.mutation({
         query: (credentials) => ({
            url: "/verify-otp",
            method: "POST",
            body: credentials
         })
      }),

      otpResend: builder.mutation({
         query: (credentials) => ({
            url: "/resend-otp",
            method: "POST",
            body: credentials
         })
      }),

      logIn: builder.mutation({
         query: (credentials) => ({
            url: "/login",
            method: "POST",
            body: credentials
         })
      }),


      forgotPassword: builder.mutation({
         query: (credentials) => ({
            url: "/forgot-password",
            method: "POST",
            body: credentials
         })
      }),

      resetPassword: builder.mutation({
         query: ({ token, password }) => ({
            url: `/reset-password/${token}`,
            method: 'PUT',
            body: { password },
         }),
      }),


      logOut: builder.mutation({
         query: () => ({
            url: "/logout",
            method: "POST",
         }),
         invalidatesTags: ["Profile"]
      }),


      myProfile: builder.query({
         query: () => ({
            url: "/user-profile",
            method: "GET",
         }),
         providesTags: ["Profile"]
      }),


      updateProfile: builder.mutation({
         query: (credentials) => ({
            url: "/user-profile",
            method: "PUT",
            body: credentials
         }),
          invalidatesTags: ["Profile"]
      }),


      updateProfilePassword: builder.mutation({
         query: (credentials) => ({
            url: "/user-profile/password",
            method: "PUT",
            body: credentials
         })
      }),



      updateProfileImage: builder.mutation({
         query: (formData) => ({
            url: "/user-profile/image",
            method: "PUT",
            body: formData
         }),
         invalidatesTags: ["Profile"]
      }),


       removeProfileImage: builder.mutation({
         query: () => ({
            url: "/user-profile/image",
            method: "DELETE"
         }),
         invalidatesTags: ["Profile"]
      }),


   })
})

export const { useSignUpMutation, useOtpVerifyMutation, useOtpResendMutation, useLogInMutation, useLogOutMutation,
   useMyProfileQuery, useUpdateProfileMutation, useForgotPasswordMutation, useResetPasswordMutation,
   useUpdateProfilePasswordMutation, useUpdateProfileImageMutation, useRemoveProfileImageMutation
} = authApi;