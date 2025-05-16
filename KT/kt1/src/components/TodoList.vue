<template>
    <div>
        <TodoItem
            v-for="el in todos"
            :key="el.id"
            :id="el.id"
            :title="el.title"
            :completed="el.completed"
            :deleteTodoByid="deleteTodoByid"
            :changeTodos="changeTodos"
        />
    </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    components: {
        TodoItem,
    },
    name: 'TodoList',
    props: {
        todos: {
            type: Array,
            required: true,
        },
        deleteTodoByid: {
            type: Function,
            required: true,
        },
        changeTodos: {
            type: Function,
            required: true,
        },
    },
}
</script>
