import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/teacher",
    credentials: "include",
  }),

  tagTypes: ["TeacherApplication"],

  endpoints: (builder) => ({
    //  USER: Apply as teacher 
    applyAsTeacher: builder.mutation({
      query: (formData) => ({
        url: "/apply",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["TeacherApplication"],
    }),

    //  USER: Get my application 
    teacherProfile: builder.query({
      query: () => ({
        url: "/my-application",
        method: "GET",
      }),
      providesTags: ["TeacherApplication"],
    }),

    //  USER: Update application 
    updateTeacherApplication: builder.mutation({
      query: (formData) => ({
        url: "/update-application",
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["TeacherApplication"],
    }),

    //  ADMIN: All applications 
    allTeacherApplications: builder.query({
      query: ({ status, page = 1, limit = 10, search = "" } = {}) => ({
        url: `/admin/all?status=${status || ""}&page=${page}&limit=${limit}&search=${search}`,
        method: "GET",
      }),
      providesTags: ["TeacherApplication"],
    }),

    //  ADMIN: Single application 
    teacherApplicationById: builder.query({
      query: (id) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
    }),

    //  ADMIN: Approve 
    approveTeacher: builder.mutation({
      query: (id) => ({
        url: `/admin/approve/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["TeacherApplication"],
    }),

    //  ADMIN: Reject 
    rejectTeacher: builder.mutation({
      query: ({ id, reason }) => ({
        url: `/admin/reject/${id}`,
        method: "PUT",
        body: { reason },
      }),
      invalidatesTags: ["TeacherApplication"],
    }),

    //  PUBLIC: Approved teachers 
    approvedTeachers: builder.query({
      query: ({ subject, language, page = 1, limit = 12 } = {}) => ({
        url: `/public/all?subject=${subject || ""}&language=${language || ""}&page=${page}&limit=${limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useApplyAsTeacherMutation,
  useTeacherProfileQuery,
  useUpdateTeacherApplicationMutation,
  useAllTeacherApplicationsQuery,
  useTeacherApplicationByIdQuery,
  useApproveTeacherMutation,
  useRejectTeacherMutation,
  useApprovedTeachersQuery,
} = teacherApi;