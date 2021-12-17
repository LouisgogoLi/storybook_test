import PropsAndEmit from "./PropsAndEmit.vue";

export default {
  title: "PropsAndEmit/PropsAndEmit",
  component: PropsAndEmit,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { PropsAndEmit },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<props-and-emit :user="user" />',
});

export const Initial = Template.bind({});
Initial.args = {
  user: {},
};
