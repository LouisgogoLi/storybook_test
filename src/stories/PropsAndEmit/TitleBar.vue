<template>
  <a class="title" @click="props.propsHandListShow">點選測試Title</a>
</template>

<script>
import "./TitleBar.css";
export default {
  props: {
    propsHandListShow: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>
