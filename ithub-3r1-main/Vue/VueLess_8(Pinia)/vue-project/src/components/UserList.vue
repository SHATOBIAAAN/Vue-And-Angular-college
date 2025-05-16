<template>
    <h2>User list</h2>
    <h2>User count - {{ userStore.usersCount }}</h2>
    <h2 v-if="userStore.loading">Loading...</h2>
    <div ref="users_wrapper" class="users_wrapper">   
        <div class="user_card" v-for="user in userStore.users" :key="user">
            {{ user.firstName }}
        </div>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users';
import { onMounted, useTemplateRef } from 'vue';

    const userStore = useUsersStore() 
    const div = useTemplateRef('users_wrapper')

    onMounted(() => {
        userStore.fetchUsers()
        div.value.addEventListener('scroll', handleScroll)
    })  

    function handleScroll(){
        const {scrollTop , scrollHeight, clientHeight} = div.value
        if ((scrollTop + clientHeight > scrollHeight - 20) && !userStore.loading){
            userStore.fetchUsers()
        }
    }

</script>


<style scoped>
    .user_card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        border: 1px solid black;
        border-radius: 16px;
        padding: 5px;
        margin: 5px 250px;

    }
    .users_wrapper{
        height: 100vh;
        overflow-y: scroll;
    }
</style>