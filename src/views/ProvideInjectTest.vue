<template>
  <parent />
</template>

<script>
import Parent from "@/components/ProvideInjectTest/Parent.vue";
import { provide, ref, reactive, readonly } from "vue";
export default {
  components: { Parent },
  setup() {
    const sLocation = ref("North Pole");
    const oGeolocation = reactive({
      longitude: 90,
      latitude: 135,
    });
    const fnUpdateLocation = () => {
      sLocation.value = "hahaha";
    };
    provide("provideLocation", readonly(sLocation));
    provide("provideGeolocation", readonly(oGeolocation));
    provide("provideUpdateLocation", fnUpdateLocation);
  },
};
</script>

<style></style>
