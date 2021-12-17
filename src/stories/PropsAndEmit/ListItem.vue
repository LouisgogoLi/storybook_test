<template>
  <ul :class="['box', { open: props.propsIsOpen }]" v-show="props.propsIsOpen">
    <li v-for="(list, idx) in aListArr" :key="list.id">
      {{ idx + 1 }}. {{ list.name }}
    </li>
  </ul>
</template>

<script>
import "./ListItem.css";
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
