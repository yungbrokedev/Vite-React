import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

export const loginQuery = createAsyncThunk('auth/loginQuery',
    async () => {
        const {data} = await axios.post('/api/', {
            withCredentials: true,
        })
        return data
    }
)

const initialState = {
    isAuth: false,
    isLoading: true,
    isError: false,
}

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        fakeAuth: (state, action) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginQuery.fulfilled, (state, action) => {
                state.auth = action.payload
                state.isLoading = false
                state.isError = false
            })
            .addCase(loginQuery.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginQuery.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }

})

export const {fakeAuth}  = auth.actions

export default auth.reducer