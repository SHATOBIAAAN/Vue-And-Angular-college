import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import usersSlice from './slice/usersSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    users: usersSlice
})

export const store = configureStore({
    reducer: rootReducer,
})