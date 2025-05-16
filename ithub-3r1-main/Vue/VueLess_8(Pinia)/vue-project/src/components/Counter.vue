<template>
    <h2>Counter</h2>
    <h3>{{ counterStore.count }}</h3>
    <h2>Computed: double</h2>
    <h3>{{ counterStore.doubleCount }}</h3>
    <button @click="incrementHandle">Increment</button>
    <button @click="decrementHandle">Decrement</button>
    <button @click="changeHandle">Change by prompt</button>
    <button @click="asyncRandomNum">Async random value</button>
</template>

Сделайте так, чтобы рандомное число появлялось сразу, когда октрывается страница

<script setup>
import { useCounterStore } from '@/stores/counter';
import { onMounted } from 'vue';

    const counterStore = useCounterStore()

    const incrementHandle = () => {
        counterStore.increment()
    }

    const decrementHandle = () => {
        counterStore.decrement()
    }

    const changeHandle = () => {
        counterStore.addByPrompt()
    }
 
    const asyncRandomNum = () => {
        counterStore.asyncRandomNum()
    }

    onMounted(() => {
        asyncRandomNum()
    })
 
</script>   