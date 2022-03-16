import Input from "../Components/Input/Input";

export default {
  title: "Layout/Input",
  component: Input,
  argTypes: { oninput: { action: "handleInput" } },
};

const Template = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: "text",
  error: false,
  placeholder: "Name",
};

export const Error = Template.bind({});
Error.args = {
  type: "text",
  error: true,
  placeholder: "Error Input",
};
