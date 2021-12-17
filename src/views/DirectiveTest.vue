<template>
  <div>
    <directive-demo />
  </div>
</template>

<script>
import DirectiveDemo from "@/components/DirectiveTest/DirectiveDemo.vue";
export default {
  components: {
    DirectiveDemo,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: slategray;
}
#app {
  width: 400px;
  overflow: hidden;
  border: 1px solid #42b983;
  border-radius: 10px;
}
</style>
