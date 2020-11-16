import { reactive } from 'vue';

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

export default useRemoveStudent;
