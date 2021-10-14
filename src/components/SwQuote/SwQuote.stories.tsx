import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwQuote, { SwQuoteProps } from "./SwQuote";
import { Story } from "@storybook/react";

export default {
  title: "Components/SwQuote",
  component: SwQuote,
  parameters:{
    layout:'fullscreen',
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwQuoteProps> = (args) => <SwQuote {...args} />;

// Reuse that template for creating different stories

export const Primary = Template.bind({});
Primary.args = {
  label: 'Test'
};

