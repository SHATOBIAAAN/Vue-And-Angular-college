import { createAsyncThunk } from "@reduxjs/toolkit";
import { authUnit, verifyUnit } from "../../service/api/auth/auth.api";


export const authAction = createAsyncThunk('login', async (body, {rejectWithValue, dispatch}) => {
    try {
        const response = await authUnit(body)
        // await dispatch(verifyAction())
        return response
    } catch (e) {
        return rejectWithValue(e)
    }
})

export const verifyAction = createAsyncThunk('verify', async (_, {rejectWithValue}) => {
    try {
        const response = await verifyUnit()
        return response
    } catch (e) {
        return rejectWithValue(e)
    }
})