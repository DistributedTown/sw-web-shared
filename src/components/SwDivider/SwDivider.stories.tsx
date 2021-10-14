import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwDivider, { SwDividerProps } from "./SwDivider";
import { Story } from "@storybook/react";

export default {
  title: "Components/SwDivider",
  component: SwDivider,
  parameters:{
    layout:'fullscreen',
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwDividerProps> = (args) => <SwDivider {...args} />;

// Reuse that template for creating different stories

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test'
};

