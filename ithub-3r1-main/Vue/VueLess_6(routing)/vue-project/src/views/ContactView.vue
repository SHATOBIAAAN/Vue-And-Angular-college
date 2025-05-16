<template>
    <section class="main">
        <h1>Contacts page!</h1>
        <ul>
            <li><RouterLink to="/contacts/email">Email</RouterLink></li>
            <li><RouterLink to="/contacts/phone">Phone</RouterLink></li>
        </ul>
        <RouterView :email="email" :phone="phone"/>
    </section>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default{
    data(){
        return {
            email: 'newEmail@test.ru',
            phone: '+7(900)-200-300-40'
        }
    }
}
</script>

<style>
    .main{
        margin: 100px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>