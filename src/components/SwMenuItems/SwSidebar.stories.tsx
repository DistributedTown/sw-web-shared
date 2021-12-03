import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SvgIcon } from "@mui/material";
import { JoinSelSvg } from "../..";
import SwSidebar, { SwSidebarProps } from "../SwSidebar/SwSidebar";

export default {
  title: "Components/SwSidebar",
  component: SwSidebar,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwSidebarProps> = (args) => <SwSidebar {...args} />;

// Reuse that template for creating different stories

const menuItems: any[] = [
  {
    label: "SkillWallet",
    href: "/community/skillwallet",
    icon: <SvgIcon component={JoinSelSvg} />,
  },
  {
    label: "dTown Hall",
    href: "/community/dTown-hall",
    icon: <SvgIcon component={JoinSelSvg} />,
  },
  {
    label: "Notifications",
    href: "/community/notifications",
    icon: <SvgIcon component={JoinSelSvg} />,
  },
  {
    label: "Settings",
    href: "/community/settings",
    icon: <SvgIcon component={JoinSelSvg} />,
  },
  {
    type: "divider",
  },
  {
    label: "Log off",
    type: 'button',
    onClick: (e) => console.log(e),
    icon: <SvgIcon component={JoinSelSvg} />,
  },
];

export const Expanded = Template.bind({});
Expanded.args = {
  open: true,
  menuItems: menuItems as any[],
};

// export const Expanded = Template.bind({});
// Expanded.args = { ...Collapsed.args, open: false };
