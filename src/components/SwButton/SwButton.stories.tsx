import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwButton, { SwButtonProps } from "./SwButton";
import { Story } from "@storybook/react";

export default {
  title: "Components/SwButton",
  component: SwButton,
  parameters:{
    layout:'fullscreen',
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwButtonProps> = (args) => <SwButton {...args} />;

// Reuse that template for creating different stories

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test'
};

