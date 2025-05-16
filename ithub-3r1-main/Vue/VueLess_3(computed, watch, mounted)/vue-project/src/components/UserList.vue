
<!-- 
    В момент изменения value возьмите новое значение и сформируйте его как имя нового пользователя в массиве users
-->
<template>
    <h2>Users</h2>
    <ul v-for="user in users" :key="user.id">
        <li
            @click="deleteUserById(user.id)"
        >
            {{ user.username }}
        </li>
    </ul>
    <div>
        <h2>{{ value }}</h2>
        <input v-model="value"/>
    </div>
</template>

<script>

export default {
    data(){
        return {
            users: [],
            value: ''
        }
    },
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.users = data
            })

        this.value = localStorage.getItem('value') ?? ''
    },
    methods: {
        deleteUserById(id){
            this.users = this.users.filter(el => el.id !== id)
        }
    },
    watch: {
        value(){
            localStorage.setItem('value', this.value)
        }
    }
}
</script>

<style scoped>
</style>