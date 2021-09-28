import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import SwMainLayout, { SwMainLayoutProps } from "./SwMainLayout";
import { Story } from "@storybook/react";

export default {
  title: "Components/SwMainLayout",
  component: SwMainLayout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwMainLayoutProps> = (args) => <SwMainLayout {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { menuItems: [] };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args };
