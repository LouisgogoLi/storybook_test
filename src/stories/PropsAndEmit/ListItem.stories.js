import ListItem from "./ListItem.vue";

export default {
  title: "PropsAndEmit/ListItem",
  component: ListItem,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ListItem },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<list-item :user="user" />',
});

export const Initial = Template.bind({});
Initial.args = {
  user: {},
};
