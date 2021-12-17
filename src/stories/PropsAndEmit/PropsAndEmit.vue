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
import "./PropsAndEmit.css";
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
