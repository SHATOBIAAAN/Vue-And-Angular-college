<template>
  <div>
    <h2>Binding & Derictive example</h2>
    <DirectiveBind></DirectiveBind>
  </div>
  <div>
    <h2>Task 1</h2>
    <div class="post_wrapper">
      <Post
        v-for="item in posts"
        :key="item.id"
        :title="item.title"
        :text="item.text"
      ></Post>
    </div>
  </div>
</template>

<!-- Задание 
  Создайте цикл по массиву posts и сформируйте 4 компонента Post передав пропы title и text
  В качестве ответа отправьте содержимое компонента App
  -->

<script>
import DirectiveBind from './components/DirectiveBind.vue';
import Post from './components/Post.vue';

export default {
  components: {
    DirectiveBind, Post
  },
  data(){
    return {
      posts: [
        {id: 1, title: 'Title 1', text: 'Text 1'},
        {id: 2, title: 'Title 2', text: 'Text 2'},
        {id: 3, title: 'Title 3', text: 'Text 3'},
        {id: 4, title: 'Title 4', text: 'Text 4'},
      ]
    }
  }
}
</script>

<style scoped>
.post_wrapper{
  margin: 10px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>