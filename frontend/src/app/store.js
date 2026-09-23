import {configureStore} from "@reduxjs/toolkit"
import {authApi} from "./api/userApi"
import { teacherApi } from "./api/teacherApi"

export const Store = configureStore({
    reducer : {
        [authApi.reducerPath] : authApi.reducer,
        [teacherApi.reducerPath]: teacherApi.reducer, 
    },

     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
     .concat([authApi.middleware])
     .concat([teacherApi.middleware]),

})