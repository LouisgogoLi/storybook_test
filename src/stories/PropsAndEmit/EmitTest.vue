<template>
  <h1>{{ nTestNumber }}</h1>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  props: {},
  emits: { emitTestNumber: null },
  //emits可做基本驗證
  //   emits: {
  //     emitTestNumber: (num) => {
  //       if (num.value === 54088) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     },
  //   },
  setup(props, { emit }) {
    const nTestNumber = ref(54088);
    onMounted(() => {
      emit("emitTestNumber", nTestNumber);
    });
    return { nTestNumber };
  },
};
</script>

<style></style>
