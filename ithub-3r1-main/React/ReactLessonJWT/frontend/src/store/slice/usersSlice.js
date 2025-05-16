import { createSlice } from "@reduxjs/toolkit";
import { authAction, verifyAction } from "../asyncActions/auth.actions";
import { getUsersAction } from "../asyncActions/users.actions";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        userList: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsersAction.fulfilled, (state, action) => {
                state.userList = action.payload
                state.loading = false
            })
            .addCase(getUsersAction.rejected, (state, action) => {
                state.error = action.payload.response.data.message
                state.loading = false
            })
            .addCase(getUsersAction.pending, (state, action) => {
                state.error = null
                state.loading = true
            })

    }
})


export default usersSlice.reducer

export const {
    logout
} = usersSlice.actions