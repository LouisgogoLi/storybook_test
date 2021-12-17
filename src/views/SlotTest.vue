<template>
  <div>
    <slots-title>Louis</slots-title>
    <slots-title>Mike</slots-title>
    <slots-title>Tedy</slots-title>
    <slot-demo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/logo.png" alt="" />
        <p class="colorRed">A paragraph for the main content.</p>
        <p class="colorRed">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </slot-demo>
    <slot-demo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/logo.png" alt="" />
        <p class="colorYellow">我這邊換了黃色</p>
        <p class="colorYellow">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </slot-demo>
    <slot-demo>
      <template #header>
        <h2 class="colorRed">Here might be a page title</h2>
      </template>

      <template #default>
        <img src="@/assets/images/bright.jpg" alt="" />
        <p class="colorRed">我這邊換了圖</p>
        <p class="colorRed">And another one.</p>
      </template>

      <template #footer>
        <p class="colorRed">這是footer</p>
      </template>
    </slot-demo>
  </div>
</template>

<script>
import SlotsTitle from "@/components/SlotTest/SlotsTitle.vue";
import SlotDemo from "@/components/SlotTest/SlotDemo.vue";
export default {
  components: { SlotsTitle, SlotDemo },
};
</script>

<style scoped>
.colorRed {
  color: red;
}
.colorYellow {
  color: yellow;
}
img {
  height: 30px;
  width: 30px;
}
</style>
