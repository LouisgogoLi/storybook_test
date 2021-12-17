<template>
  <div>
    <h1>測試Props傳值</h1>
    <h2>{{ props.propsTestName }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    propsTestName: {
      type: String,
      default: "沒有傳值",
    },
    propsBool: {
      type: Boolean,
      default: false,
    },
    propsPay: {
      type: Number,
      default: 0,
    },
    propsDate: {
      type: Date,
      default: null,
    },
    propsArr: {
      type: Array,
      default: () => [],
    },
    propsObj: {
      type: Object,
      default: () => {
        return {};
      },
    },
    propsMyName: {
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

<style></style>
