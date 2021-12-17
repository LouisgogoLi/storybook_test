<template>
  <ul :class="['box', { open: props.propsIsOpen }]" v-show="props.propsIsOpen">
    <li v-for="(list, idx) in aListArr" :key="list.id">
      {{ idx + 1 }}. {{ list.name }}
    </li>
  </ul>
</template>

<script>
import { reactive } from "vue";
export default {
  props: {
    propsIsOpen: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const aListArr = reactive([
      { id: "0001", name: "測試Vue陣列1", show: true, status: "red" },
      { id: "0002", name: "測試Vue陣列2", show: false, status: "blue" },
      { id: "0003", name: "測試Vue陣列3", show: true, status: "red" },
      { id: "0004", name: "測試Vue陣列4", show: true, status: "red" },
      { id: "0005", name: "測試Vue陣列5", show: false, status: "blue" },
    ]);
    return {
      props,
      aListArr,
    };
  },
};
</script>

<style>
.box {
  display: block;
  width: 100%;
  height: 0;
  background-color: snow;
  transition: height 0.4s;
}
.box.open {
  height: 200px;
}
.box > li {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #d2d2d2;
  font-size: 12px;
  color: darkslategray;
}
</style>
