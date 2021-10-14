import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import MainBackgroundSvg from "./MainBackgroundSvg";
import SwLogoSvg from "./SwLogoSvg";
import QRCodeSvg from "./QRCodeSvg";
import { SvgInputModel } from "../input.model";
import SwMainDesignSvg from "./MainDesignSvg";
import DitoLogoSvg from "./DitoLogoSvg";
import DitoLogoCircleSvg from "./DitoLogoCircleSvg";
import CenterWhiteBarSvg from "./CenterWhiteBarSvg";

export default {
  title: "SVGComponents/SwMainDesignSvg",
  component: SwMainDesignSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component

const DitoLogoTemplate: Story<SvgInputModel> = (args) => (
  <DitoLogoSvg {...args} />
);
const SwLogoTemplate: Story<SvgInputModel> = (args) => <SwLogoSvg {...args} />;
const MainBackgroundTemplate: Story<SvgInputModel> = (args) => (
  <MainBackgroundSvg {...args} />
);
const QRCodeTemplate: Story<SvgInputModel> = (args) => <QRCodeSvg {...args} />;
const DitoLogoCircleTemplate: Story<SvgInputModel> = (args) => (
  <DitoLogoCircleSvg {...args} />
);

const CenterWhiteBarTemplate: Story<SvgInputModel> = (args) => (
  <CenterWhiteBarSvg {...args} />
);

// Reuse that template for creating different stories

export const DitoLogo = DitoLogoTemplate.bind({});
export const SwLogo = SwLogoTemplate.bind({});
export const MainBackground = MainBackgroundTemplate.bind({});
export const QRCode = QRCodeTemplate.bind({});
export const DitoLogoCircle = DitoLogoCircleTemplate.bind({});
export const CenterWhiteBar = CenterWhiteBarTemplate.bind({});

DitoLogo.args = {
  width: "200",
  height: "200",
};
MainBackground.args = {
  width: "1366",
  height: "768",
};

SwLogo.args = {
  width: "100",
  height: "100",
};

QRCode.args = SwLogo.args;
DitoLogoCircle.args = SwLogo.args;
CenterWhiteBar.args = {
  width: "8.659",
  height: "767",
};
