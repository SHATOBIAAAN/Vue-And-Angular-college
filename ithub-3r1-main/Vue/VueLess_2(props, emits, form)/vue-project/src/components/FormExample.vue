<!-- 
v-model - директива для работы с данными формы  
Директива позволяет привязать переменную к инпуту, который будет формировать для нее реактивно текущее значение
-->

<!-- 
ДЗ 
Реализуйте метод по добавлению нового пользователя в текущий компонент используя форму
-->

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="formData.name" type="text" placeholder="name"/>
        <input v-model="formData.age" type="number" placeholder="age"/>
        <input type="submit"/>
    </form>
    <div>
        <p>{{ formData.name }}</p>
        <p>{{ formData.age }}</p>
    </div>
</template>


<script>
export default {
    data(){
        return {
            formData: {
                name: '',
                age: null
            }
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.formData)
        }
    }
}
</script>


<style scoped>
</style>