<template>
    <header class="header">
        <nav class="menu">
            <RouterLink to="/"><li>Home</li></RouterLink>
            <RouterLink to="/about"><li>About</li></RouterLink>
            <RouterLink to="/contacts"><li>Contacts</li></RouterLink>
        </nav>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;700&display=swap');
.header {
    font-family: 'Heebo', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-top: 20px;
}

.menu {
    font-family: 'Heebo', sans-serif;
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 30px;
    padding-right: 117px;
}
.menu a {
    text-decoration: none;
    color: black;
}
</style>
