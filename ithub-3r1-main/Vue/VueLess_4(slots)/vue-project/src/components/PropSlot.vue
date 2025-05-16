<template>
    <p>Prop slot component</p>
    <slot :msg="message" :userName="name" :age="age"></slot>
</template>

<script>
export default {
    data(){
        return {
            message: 'Hello!',
            age: 20,
            name: 'Alex'
        }
    }
}
</script>

