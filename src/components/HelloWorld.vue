<template>
  <div>
    <div>{{ count }}</div>
    <button @click="myFn">點擊</button>

    <form>
      <input type="text" v-model="state2.stu.id" />
      <input type="text" v-model="state2.stu.name" />
      <input type="text" v-model="state2.stu.age" />
      <input type="submit" @click="addStu" />
    </form>

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
import useRemoveStudent from './remove';
import useAddStudent from './add';

export default {
  name: 'HelloWorld',

  setup() {
    let count = ref(0);

    let myFn = () => {
      // console.log(count);
      count.value += 1;
    };

    let { state, remStu } = useRemoveStudent();
    let { state2, addStu } = useAddStudent(state);

    // let addStu = e => {
    //   e.preventDefault();
    //   console.log(this);
    // };

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
    return { count, myFn, state, remStu, state2, addStu };
  }
};
</script>
