<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-image: url("~@/assets/images/slot_test_photo.jpg");
  background-size: 100% 200px;
  height: 200px;
  width: 600px;
}
</style>
