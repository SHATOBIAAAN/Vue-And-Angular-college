import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function addByPrompt(){
    const value = prompt('Введите число')
    if (isNaN(value)){
      alert('Введение значение не является число')
    } else {
      count.value = +value
    }
  }

  async function asyncRandomNum(){
    let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
    let res = await fetch(url)
    let data = await res.json()
    count.value = data
  }

  // function asyncRandomNum(){
  //   let url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new'
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       count.value = data
  //     })
  // }

  return { count, doubleCount, increment, decrement, addByPrompt, asyncRandomNum}
})
