import axios from "axios"
import { BASE_URL, instance } from ".."


export const authUnit = async (body) => {
    const response = await axios.post(`${BASE_URL}/auth/login`, body)
    return response.data
}


export const verifyUnit = async () => {
    const response = await instance.get(`/auth/verify`)
    return response.data
}