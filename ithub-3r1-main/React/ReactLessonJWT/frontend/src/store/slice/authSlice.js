import { createSlice } from "@reduxjs/toolkit";
import { authAction, verifyAction } from "../asyncActions/auth.actions";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userName: '',
        isAuth: false,
        token: JSON.parse(localStorage.getItem('token'))?.accessToken ?? null,
        refreshToken: JSON.parse(localStorage.getItem('token'))?.refreshToken ?? null,
        loading: false,
        error: null
    },
    reducers: {
        logout(state) {
            state.userName = ''
            state.isAuth = false
            state.token = null
            state.refreshToken = null
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(authAction.fulfilled, (state, action) => {
                const {
                    accessToken,
                    refreshToken
                } = action.payload
                state.token = accessToken
                state.refreshToken = refreshToken
                state.loading = false
                localStorage.setItem('token', JSON.stringify({ accessToken, refreshToken }))
            })
            .addCase(authAction.rejected, (state, action) => {
                state.error = action.payload.response.data.message
                state.token = null
                state.loading = false
                state.refreshToken = null
                localStorage.removeItem('token')
            })
            .addCase(authAction.pending, (state, action) => {
                state.error = null
                state.loading = true
            })

            .addCase(verifyAction.fulfilled, (state, action) => {
                state.isAuth = true
                state.loading = false
                state.userName = action.payload.user.username
            })
            .addCase(verifyAction.rejected, (state, action) => {
                state.isAuth = false
                state.loading = false
                state.token = null
                state.refreshToken = null
                localStorage.removeItem('token')
            })
            .addCase(verifyAction.pending, (state, action) => {
                state.loading = true
            })
    }
})


export default authSlice.reducer

export const {
    logout
} = authSlice.actions