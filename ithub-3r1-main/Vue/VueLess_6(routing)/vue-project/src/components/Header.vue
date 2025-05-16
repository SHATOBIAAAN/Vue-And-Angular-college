<template>
    <header>
        <div class="logo"></div>
        <nav class="menu">
            <RouterLink to="/"><li>Home</li></RouterLink>
            <RouterLink to="/about"><li>About</li></RouterLink>
            <RouterLink to="/contacts"><li>Contacts</li></RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default{

}
</script>

<style>
    header{
        display: flex;
        justify-content: space-around;
        padding: 25px 0px;
        background-color: blanchedalmond;
    }
    .logo{
        width: 40px;
        height: 40px;
        background-color: brown;
        border-radius: 50%;
    }
    .menu{
        display: flex;
        align-items: center;
        gap: 25px;
        list-style-type: none;
    }
</style>