import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import SwProgressBar, {
  NoBorderLinearProgressProps,
} from "./SwLinearProgressBar";

export default {
  title: "Components/SwProgressBar",
  component: SwProgressBar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Progress Bar component
const Template: Story<NoBorderLinearProgressProps> = (args) => (
  <SwProgressBar {...args} />
);

// Reuse that template for creating different stories

export const Primary = Template.bind({});
Primary.args = {
  variant: "determinate",
  percentage: "20",
};
