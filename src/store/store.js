import { configureStore } from '@reduxjs/toolkit'
import auth from "../pages/Auth/auth.slice.js";

export const store = configureStore({
    reducer: {
        auth
    }
})