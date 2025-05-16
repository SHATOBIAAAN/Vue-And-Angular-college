<!--  binding (биндинг)
 Для формирования текстового содержимого используются {{ value }} 
 Для формирования выражения внутри атрибутов используется знак : вначале атрибута. Далее в кавычках можно указать JS выражение
 Для стилизации важно указать в кавычках объект (если надо указать JS выражение), перечислив значение стилизации как набор ключ-значение по указанному примеру
-->

<!-- Директивы
 v-for (директива для создания цикла) 
 v-if  (условная отрисовка)
-->
<template>
  <h1 class="main_text">Hello world!</h1>
  <p>{{ text }}</p>
  <p :class="classExample + 'dered'">{{ price }}</p>
  <p :style="{ display: isShow ? 'block' : 'none', fontSize: '50px' }">Hidden</p>

  <!-- Пример цикла v-for-->
  <ul>
    <li v-for="(item, ind) in products" :key="ind">
      {{ item }}
    </li>
  </ul>
  <img :src="imgSrc" alt="img">
  <!-- Пример условной отрисовки v-if -->
  <div v-if="isShow">Услованя отрисовка</div>
  <div v-else-if="price > 3000">Услованая отрисовка (price)</div>
  <div v-else>Услованя отрисовка (false)</div>

  <div></div>
</template>

<script>
// Все переменные инициализируются внутри метода data() который возвращает объект с наборами ключ-значение
// где ключ - имя переменной, а значение - его значение (число, строка, массив, булевый тип и тд)

export default {
  data() {
    return {
      text: 'Some text!',
      price: 2000,
      classExample: 'bor',
      isShow: false,
      products: ['Шоколад', 'Пончик', 'Жвачка', 'Мармелад', 'Газировка'],
      imgSrc: 'https://i.pinimg.com/originals/25/ef/a7/25efa79cb9e70f6af08cb47f851b8ebf.png',
    }
  },
}
</script>

<!-- scoped - изолированная стилизация (модульная) -->
<style scoped>
.bordered {
  padding: 10px;
  border: 1px solid black;
}

.main_text {
  color: red;
}

.second_text {
  color: purple;
}
</style>
