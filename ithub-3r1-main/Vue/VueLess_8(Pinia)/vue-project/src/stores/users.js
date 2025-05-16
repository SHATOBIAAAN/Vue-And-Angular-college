import { defineStore } from 'pinia'
import {  computed, ref } from 'vue'
import { useCounterStore } from './counter'

export const useUsersStore = defineStore('users' ,() => {
    // Пример получения данных другово стора
    const countStore = useCounterStore()

    let users = ref([])
    let countElem = 30
    let countLoad = ref(0)
    let loading = ref(false)

    let usersCount = computed(() => users.value.length)

    const fetchUsers =  async () => {
        loading.value = true

        const skip = countLoad.value == 0 ? "" : `&skip=${countLoad.value * countElem}`
        const limit = `limit=${countElem}`

        const res = await fetch(`https://dummyjson.com/users?${limit}${skip}`)
        const data = await res.json()
        if (countLoad.value === 0){
            users.value = data.users
        } else {
            users.value = [...users.value, ...data.users]
        }
        countLoad.value++
        loading.value = false

        // Вызов метода другово стора
        countStore.increment()
    }


    return {
        users,
        usersCount,
        fetchUsers,
        loading
    }
})