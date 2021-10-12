import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwScrollbar, { SwScrollbarProps } from "./SwScrollbar";
import { Story } from "@storybook/react";

export default {
  title: "Components/SwScrollbar",
  component: SwScrollbar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const Template: Story<SwScrollbarProps> = (args) => <SwScrollbar {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
