import TitleBar from "./TitleBar.vue";

export default {
  title: "PropsAndEmit/TitleBar",
  component: TitleBar,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { TitleBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<title-bar :user="user" />',
});

export const Initial = Template.bind({});
Initial.args = {
  user: {},
};
