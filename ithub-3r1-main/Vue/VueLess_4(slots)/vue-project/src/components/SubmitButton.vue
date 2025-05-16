<template>
    <button>
        <slot name="startIcon"></slot>
        <slot></slot>
        <slot name="endIcon"></slot>
    </button>
</template>

<script>
export default {

}
</script>


<style scoped>

button{
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 16px;
    background-color: burlywood;

    font-weight: 800;
    color: black;
    transition: 250ms;
}

button:hover{
    transform: scale(1.1);
}

button:active{
    transform: scale(1);
}
</style>
