<template>
    <div
        class="todo_card"
        :style="{ backgroundColor: completed ? 'green' : 'red' }"
        @dblclick="deleteTodoByid(id)"
        @click="changeTodos(id)"
    >
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        id: {
            type: Number,
            required: true,
        },
        completed: {
            type: Boolean,
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
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
