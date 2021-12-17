<template>
  <div>
    <input
      v-focus
      type="text"
      placeholder="input Number"
      v-model.number="nNum"
    />
    <h1 v-thousandsSeparator="nNum"></h1>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const nNum = ref(32859004247);

    return {
      nNum,
    };
  },
};
</script>

<style scoped>
input {
  display: block;
  width: 100%;
  height: 30px;
  background-color: #fff;
  padding-left: 10px;
  border-radius: 10px;
}
</style>
