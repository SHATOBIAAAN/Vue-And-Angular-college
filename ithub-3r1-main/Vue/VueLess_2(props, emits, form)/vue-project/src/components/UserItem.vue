<template>
    <div @dblclick="deleteUserById" @click="increaseAge">
      <h3>{{ name }}</h3>
      <p>{{ age }}</p>
    </div>
</template>


<script>
export default {
    // входящие пропсы
    props: {
        name: String, 
        age: Number,
        id: Number,
    },
    // emits регистрирует входящие методы
    emits: ['deleteUserById', 'increaseAge'],
    methods: {
        // Пример декларации входящего метода на стороне дочернего компонента
        // $emit - функция для вызова метода и передачи аргумента
        deleteUserById(){
            this.$emit('deleteUserById', this.id)
        },
        increaseAge(){
            this.$emit('increaseAge', this.id)
        }
    }
}
</script>


<style scoped>

</style>