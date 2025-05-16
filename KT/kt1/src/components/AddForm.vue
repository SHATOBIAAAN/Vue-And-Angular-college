<template>
    <div class="input_elem">
        <input @keyup="handleKeyUp" />
    </div>
</template>

<script>
export default {
    name: 'AddForm',
    props: {
        addTodo: {
            type: Function,
            required: true,
        },
    },
    methods: {
        handleKeyUp(event) {
            if (event.key === 'Enter') {
                this.addTodo(event.target.value)
                event.target.value = ''
            }
        },
    },
}
</script>

