<template>
    <AddForm :addTodo="addTodo" />
    <TodoList
        :todos="todos"
        :changeTodos="changeTodos"
        :deleteTodoByid="deleteTodoByid"
    />
</template>

<script>
import AddForm from './components/AddForm.vue'
import TodoList from './components/TodoList.vue'

export default {
    name: 'App',
    components: {
        AddForm,
        TodoList,
    },
    data() {
        return {
            start_todos: [
                { id: 1, title: 'Помыть руки', completed: true },
                { id: 2, title: 'Сделать зарядку', completed: false },
                { id: 3, title: 'Наконец изучить React', completed: true },
            ],
            todos: [],
        }
    },
    created() {
        const LocalData = JSON.parse(localStorage.getItem('todos'))
        if (!Array.isArray(LocalData) || LocalData.length === 0) {
            this.todos = [...this.start_todos]
        } else {
            this.todos = LocalData
        }
    },
    methods: {
        addTodo(title) {
            const newTodo = {
                id: Date.now(),
                title,
                completed: false,
            }
            this.todos = [...this.todos, newTodo]
            this.saveTodos()
        },
        deleteTodoByid(id) {
            this.todos = this.todos.filter(elem => elem.id !== id)
            this.saveTodos()
        },
        changeTodos(id) {
            this.todos = this.todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
            this.saveTodos()
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
