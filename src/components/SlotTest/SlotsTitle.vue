<template>
  <h1>
    <img src="@/assets/images/logo.png" alt="" />
    <slot />
  </h1>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  color: red;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
}
img {
  display: block;
  width: 25px;
  margin-right: 10px;
}
</style>
