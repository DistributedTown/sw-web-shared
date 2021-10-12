import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SvgInputModel } from "./input.model";
import DitoLogoSvg from "./DitoLogoFullSvg";

import JoinSelSvg from "./JoinSelSvg";
import MainBackgroundSvg from "./MainBackgroundSvg";
import SwLogoSvg from "./SwLogoSvg";
import SwSvg from "./Svg";
import QRCodeSvg from "./QRCodeSvg";

export default {
  title: "Components/SwSvg",
  component: SwSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const JoinSelTemplate: Story<SvgInputModel> = (args) => (
  <JoinSelSvg {...args} />
);
const DitoLogoTemplate: Story<SvgInputModel> = (args) => (
  <DitoLogoSvg {...args} />
);
const LogoTemplate: Story<SvgInputModel> = (args) => <SwLogoSvg {...args} />;
const MainBackgroundTemplate: Story<SvgInputModel> = (args) => (
  <MainBackgroundSvg {...args} />
);
const QRCodeTemplate: Story<SvgInputModel> = (args) => <QRCodeSvg {...args} />;

// Reuse that template for creating different stories

export const JoinSel = JoinSelTemplate.bind({});
export const DitoLogo = DitoLogoTemplate.bind({});
export const SwLogo = LogoTemplate.bind({});
export const MainBackground = MainBackgroundTemplate.bind({});
export const QRCode = QRCodeTemplate.bind({});

JoinSel.args = {
  with: "100",
  height: "100",
};

DitoLogo.args = JoinSel.args;
SwLogo.args = JoinSel.args;
MainBackground.args = JoinSel.args;
QRCode.args = JoinSel.args;
