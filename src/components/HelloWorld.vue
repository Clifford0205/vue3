<template>
  <div>
    <div>{{ count }}</div>
    <button @click="myFn">點擊</button>

    <ul>
      <li
        v-for="(stu, index) in state.stus"
        :key="stu.id"
        @click="remStu(index)"
      >
        {{ stu.name }}-{{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
// ref只能監聽簡單的類型,reactive能監聽 物件、陣列
import { ref, reactive } from 'vue';
export default {
  name: 'HelloWorld',

  setup() {
    let count = ref(0);

    let myFn = () => {
      // console.log(count);
      count.value += 1;
    };

    let { state, remStu } = useRemoveStudent();

    // let state = reactive({
    //   stus: [
    //     { id: 1, name: 'aa', age: 10 },
    //     { id: 2, name: 'bb', age: 20 },
    //     { id: 3, name: 'cc', age: 30 }
    //   ]
    // });

    // let remStu = index => {
    //   state.stus = state.stus.filter((item, idx) => idx !== index);
    // };
    return { count, myFn, state, remStu };
  }
};

function useRemoveStudent() {
  let state = reactive({
    stus: [
      { id: 1, name: 'aa', age: 10 },
      { id: 2, name: 'bb', age: 20 },
      { id: 3, name: 'cc', age: 30 }
    ]
  });

  let remStu = index => {
    state.stus = state.stus.filter((item, idx) => idx !== index);
  };

  return { state, remStu };
}
</script>
