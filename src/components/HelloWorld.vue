<template>
  <div>
    <div>{{ count }}</div>
    <button @click="myFn">點擊</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'HelloWorld',

  setup() {
    let count = ref(0);

    let myFn = () => {
      // console.log(count);
      count.value += 1; 
    };
    return { count, myFn };
  }
};
</script>
