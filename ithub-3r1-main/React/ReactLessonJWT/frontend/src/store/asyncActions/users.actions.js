import { createAsyncThunk } from "@reduxjs/toolkit"
import { userListUnit } from "../../service/api/users/users.api"


export const getUsersAction = createAsyncThunk('users', async (_, {rejectWithValue}) => {
    try {
        const response = await userListUnit()
        return response
    } catch (e) {
        return rejectWithValue(e)
    }
})