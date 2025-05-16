<template>
    <h2>Users</h2>
    <button @click="addNewUser">Add user</button>
    <h2>Max name length - {{ longestName }}</h2>
    <ul>
        <li v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
</template>


<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

    let users = ref([
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'}
    ])

    function addNewUser(){
        users.value.push({
            id: Date.now(),
            name: prompt('Введите имя')
        })
    }

    // Метод, выполняющий побочный код после МОНТИРОВАНИЯ компонента
    onMounted(() => {
        console.log('Монтирование')
    })

    // Метод, выполняющий побочный код после РАЗМОНТИРОВАНИЯ компонента (его удаления из разметки)
    onUnmounted(() => {
        console.log('Размонитрование')
    })
    
    // Пример функции computed
    let computedUsers = computed(() => {
        return users.value.map(el => el.name).join(',')
    })

    let longestName = computed(() => {
        return [...users.value].sort((a,b) => b.name.length - a.name.length)[0].name
    })

    // Пример функции watch
    // deep: true позволяет осуществить более детальную слежку, учитывая изменения элементов ВНУТРИ массива (если они объекты)
    // без данного флага watch не заметит изменение/удаление/добавление нового объекта внутри массива
    watch(computedUsers, (newValue, oldValue) => {
            console.log(JSON.stringify(newValue))
            console.log(JSON.stringify(oldValue))
    }, {deep: true})



</script>