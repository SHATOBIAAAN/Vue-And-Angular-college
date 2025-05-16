<template>
    <div class="post">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
</template>


<script>
    export default {
        props: ['title','text']
    }
</script>

<style scoped>
.post{
    width: 350px;
    border: 1px solid black;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: bisque;
}
</style>