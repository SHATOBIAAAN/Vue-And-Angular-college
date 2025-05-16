import axios from "axios"
import { BASE_URL, instance } from ".."

export const userListUnit = async () => {
    const response = await instance.get(`${BASE_URL}/auth/users`)
    return response.data
}

