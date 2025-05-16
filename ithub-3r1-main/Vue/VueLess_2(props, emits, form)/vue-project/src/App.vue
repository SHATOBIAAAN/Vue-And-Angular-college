<template>
  <h2>{{ count }}</h2>
  <div @click="handleSecondClick">
    <button @click.stop="handleClick">Click!</button>
  </div>
  <div>
    <h2>{{ title }}</h2>
    <button @click="reverseTitle">Reverse</button>
  </div>
  <div>
    <button @click="removeLastUser">Remove last user</button>
    <button @click="addNewUser">Add new user</button>
    <UserItem v-for="item in users"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :age="item.age"
      @deleteUserById="deleteUserById"
      @increaseAge="increaseAge"
    >
    </UserItem>
  </div>
  <FormExample></FormExample>
</template>

<!-- 
  Создайте метод, который будет увеличивать возраст на 5 лет по клику на карточку 
-->

<script>
import FormExample from './components/FormExample.vue';
import UserItem from './components/UserItem.vue';

export default {
  components: {
    UserItem, FormExample
  },
  data(){
    return {
      count: 0,
      title: 'Hello world!',
      users: [
        {id: 1, name: 'Alex', age: 24},
        {id: 2, name: 'Willyam', age: 33},
        {id: 3, name: 'Neena', age: 44},
      ]
    }
  },
  methods: {
    handleClick(){
      this.count += 1
    },
    handleSecondClick(){
      console.log('div click!')
    },
    reverseTitle(){
      this.title = this.title.split('').reverse().join('')
    },
    removeLastUser(){
      this.users.pop()
    },
    addNewUser(){
      this.users.push({
        id: Date.now(),
        name: prompt('Enter name'),
        age: +prompt('Enter age')
      })
    },
    deleteUserById(id){
      this.users = this.users.filter(user => user.id !== id)
    },
    increaseAge(id){
      let findUser = this.users.find(user => user.id === id)
      findUser.age += 5
    }
  }
}
</script>

<style scoped>
</style>