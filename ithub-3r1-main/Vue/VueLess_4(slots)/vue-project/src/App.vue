<template>
  <!-- Применение слота -->
  <!-- <SimpleSlot>
    <h1>First example slot!</h1>
  </SimpleSlot>

  <SimpleSlot>
    <h2 class="blue">Second example slot!</h2>
    <h2 class="blue">Second example slot!</h2>
    <h2 class="blue">Second example slot!</h2>
  </SimpleSlot> -->


  <!-- Именованные слоты (подслоты) -->
  <NamesSlot>
    <template v-slot:slot_1>
      <h5>First slot</h5>
    </template>
    <template v-slot:slot_2>
      <h5>Second slot</h5>
    </template>
  </NamesSlot>

  <!-- Передача параметров из дечреного компонента в родительский -->
  <PropSlot>
    <template v-slot="slot">
      <h2>{{ slot.msg }}</h2>
      <ul>
        <li>{{ slot.age }}</li>
        <li>{{ slot.userName }}</li>
      </ul>
    </template>
  </PropSlot>


  <PropSlot>
    <template v-slot="slot">
      <ul>
        <li>{{ slot.userName }}</li>
        <li>{{ slot.age }}</li>
      </ul>
      <h2>{{ slot.msg }}</h2>
    </template>
  </PropSlot>

  <!-- Пример слота на практике -->
  <SubmitButton>
    Click!
    <template v-slot:endIcon>
      <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    </template>
  </SubmitButton>


  <SubmitButton>
    Click!
    <template v-slot:startIcon>
      <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
    </template>
  </SubmitButton>


</template>


<script>
import NamesSlot from './components/NamesSlot.vue';
import SimpleSlot from './components/SimpleSlot.vue';
import PropSlot from './components/PropSlot.vue';
import SubmitButton from './components/SubmitButton.vue';

export default {
  components: {
    SimpleSlot,
    NamesSlot,
    PropSlot,
    SubmitButton
  }
}
</script>

<style scoped>
    .blue{
        color: blue;
        padding: 5px;
        border: 1px solid black;
    }
</style>
