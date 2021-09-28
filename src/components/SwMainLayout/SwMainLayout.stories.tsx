import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwMainLayout, { SwMainLayoutProps } from "./SwMainLayout";
import { Story } from "@storybook/react";
import "antd/dist/antd.css";

export default {
  title: "Components/SwMainLayout",
  component: SwMainLayout,
  parameters:{
    layout:'fullscreen',
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwMainLayoutProps> = (args) => <SwMainLayout {...args} />;

// Reuse that template for creating different stories
export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
  menuItems: [
    {
      type: "button",
      label: "Test",
    },
  ],
};

export const Expanded = Template.bind({});
Expanded.args = { ...Collapsed.args, collapsed: false };
