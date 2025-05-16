<template>
  <AppHeader></AppHeader>
  <RouterView :message="message" />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: { AppHeader: Header },
  data() {
    return {
      message: "code",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
