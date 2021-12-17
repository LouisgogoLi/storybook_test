<template>
  <h1>{{ nTimerNumber }}</h1>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  props: {},
  emits: {
    emitTimerNumber: (num) => {
      if (num.value === 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  setup(props, { emit }) {
    const nTimerNumber = ref(5);
    let timer = null;

    onMounted(() => {
      timer = setInterval(() => {
        nTimerNumber.value--;
        if (nTimerNumber.value === 0) {
          clearInterval(timer);
          emit("emitTimerNumber", nTimerNumber);
        }
      }, 1000);
    });
    return {
      nTimerNumber,
    };
  },
};
</script>

<style scoped>
h1 {
  color: black;
}
</style>
