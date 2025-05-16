<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="toUpperCace">To upper case</button>
  </div>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="increment">Increment</button>
  </div>
  <button @click="addNewNumber">Add new elem</button>
  <ul>
    <li v-for="num in array" :key="num">
        {{ num }}
    </li>
  </ul>
  <div>
    <button @click="changeUserAge">Add age</button>
    <p>{{ users.name }}</p>
    <p>{{ users.age }}</p>
  </div>
  <Example @toUpperCace="toUpperCace" :message="message"></Example>
  <UserList v-if="counter <= 0"></UserList>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Example from './components/Example.vue';
import UserList from './components/UserList.vue';

 // ref как правило используется для примитивов (можем напрямую через .value менять значеие) 
  let message = ref('Hello world')
  let counter = ref(0)

  let array = ref([1,2,3,4])

  // reactive используется для объектов, однако напрямую менять (через знак = ) нельзя
  let users = reactive({name: 'Alex', age: 35})

  function changeUserAge(){
    users.age += 10
  }

  function addNewNumber(){
    array.value = [1,2,3,4,5]
  }

  function toUpperCace(arg){
    message.value = message.value.toUpperCase()
  }

  function increment(){
    counter.value = counter.value + +prompt()
  }

</script>

До реф
'Hello!' 
 
После реф
{value: 'Hello!'}



