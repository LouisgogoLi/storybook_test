<template>
  <props-test
    :propsTestName="sTestName"
    :propsBool="bBool"
    :propsPay="nPay"
    :propsDate="dDate"
    :propsArr="aArr"
    :propsObj="oObj"
    :propsMyName="fnMyName"
  />
</template>

<script>
import PropsTest from "@/components/PropsApp/PropsTest.vue";
import { ref, reactive } from "vue";
export default {
  components: { PropsTest },
  setup() {
    const sTestName = ref("Hello Louis");
    const bBool = ref(true);
    const nPay = ref(12345);
    const dDate = ref(new Date());
    const aArr = reactive([]);
    const oObj = reactive({});
    const fnMyName = () => {};

    return {
      sTestName,
      bBool,
      nPay,
      dDate,
      aArr,
      oObj,
      fnMyName,
    };
  },
};
</script>

<style></style>
