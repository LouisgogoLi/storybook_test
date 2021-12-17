<template>
  <div>
    <title-bar :propsHandListShow="fnHandListShow" />
    <list-item :propsIsOpen="bIsOpen" />
    <!-- <emit-test @emitTestNumber="fnEmitTestNumber" /> -->
    <!-- <timer-box @emitTimerNumber="fnTimerNumber" /> -->
    <!-- <dom-ref-test ref="getChildDomRefTest" /> -->
  </div>
</template>

<script>
import TitleBar from "./TitleBar.vue";
import ListItem from "./ListItem.vue";
//import EmitTest from "@/components/PropsAndEmit/EmitTest.vue";
//import TimerBox from "@/components/PropsAndEmit/TimerBox.vue";
//import DomRefTest from "@/components/PropsAndEmit/DomRefTest.vue";
import { ref, onMounted } from "vue";

export default {
  components: {
    TitleBar,
    ListItem,
    //EmitTest,
    // TimerBox,
    //DomRefTest,
  },
  setup() {
    const bIsOpen = ref(true);

    const fnHandListShow = () => {
      bIsOpen.value = !bIsOpen.value;
    };

    const fnEmitTestNumber = (num) => {
      console.log(num.value);
    };

    const fnTimerNumber = (num) => {
      console.log("Time is over..", num.value);
    };

    //const getChildDomRefTest = ref(null);

    onMounted(() => {
      //console.log(getChildDomRefTest.value.sConts);
    });
    return {
      bIsOpen,
      fnHandListShow,
      fnEmitTestNumber,
      fnTimerNumber,
      // getChildDomRefTest,
    };
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
