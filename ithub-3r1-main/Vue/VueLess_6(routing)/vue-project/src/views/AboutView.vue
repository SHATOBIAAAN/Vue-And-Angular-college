<template>
    <section class="main">
        <h1>About page!</h1>
        <h2>{{ id }}</h2>
        <h2>{{ title }}</h2>
        <h2>{{ message }}</h2>
        <h2>{{ users.username }}</h2>
    </section>
</template>

<script>
export default{
    props: {
        title: String,
        message: String
    },
    data(){
        return {
            id: this.$route.params.id,
            users: {}
        }
    },  
    mounted(){
        // console.log(this.$route.params)
        // console.log(this.$route.fullPath)
        // console.log(this.$route.matched)
        // console.log(this.$route.hash)

        fetch('https://jsonplaceholder.typicode.com/users/'+this.id)
            .then(res => res.json())
            .then(data => {
                this.users = data
            })
    }
}


const token = localStorage.getItem('token')
if (token || path == '/profile'){
    next('/')
} else {
    next('/login')
}
</script>

<style>
    .main{
        margin: 100px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>




