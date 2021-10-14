import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TownhallNavSvg, TreasurySelSvg, TreasurySvg } from "../../..";
import { SvgInputModel } from "../input.model";
import NavbarSvg from "./NavbarSvg";
import SkillWalletNavSvg from "./SkillWalletNavSvg";
import SettingsSvg from "./SettingsSvg";
import NotificationsSvg from "./NotificationsSvg";
import LogoffSvg from "./LogoffSvg";
import FooterShareSvg from "./FooterShareSvg";
import FooterMembersSvg from "./FooterMembersSvg";

export default {
  title: "Components/NavbarSvg",
  component: NavbarSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const TownhallTemplate: Story<SvgInputModel> = (args) => (
  <TownhallNavSvg {...args} />
);
const SkillWalletNavTemplate: Story<SvgInputModel> = (args) => (
  <SkillWalletNavSvg {...args} />
);
const SettingsTemplate: Story<SvgInputModel> = (args) => (
  <SettingsSvg {...args} />
);
const NotificationsTemplate: Story<SvgInputModel> = (args) => (
  <NotificationsSvg {...args} />
);
const LogoffTemplate: Story<SvgInputModel> = (args) => <LogoffSvg {...args} />;
const FooterShareTemplate: Story<SvgInputModel> = (args) => (
  <FooterShareSvg {...args} />
);
const FooterMembersTemplate: Story<SvgInputModel> = (args) => (
  <FooterMembersSvg {...args} />
);

// Reuse that template for creating different stories

export const Townhall = TownhallTemplate.bind({});
export const SkillWalletNav = SkillWalletNavTemplate.bind({});
export const Settings = SettingsTemplate.bind({});
export const Notifications = NotificationsTemplate.bind({});
export const Logoff = LogoffTemplate.bind({});
export const FooterShare = FooterShareTemplate.bind({});
export const FooterMembers = FooterMembersTemplate.bind({});

Townhall.args = {
  width: "100",
  height: "100",
};

SkillWalletNav.args = Townhall.args;
Settings.args = Townhall.args;
Notifications.args = Townhall.args;
Logoff.args = Townhall.args;
FooterShare.args = Townhall.args;
FooterMembers.args = Townhall.args;
