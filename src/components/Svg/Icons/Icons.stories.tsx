import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import JoinSelSvg from "./JoinSelSvg";
import CreateUnselSvg from "./CreateUnselSvg";
import DitoCreditsSvg from "./DitoCreditsSvg";
import SwIconsSvg from "./SwIconsSvg";
import { SvgInputModel } from "../input.model";
import GameTheorySvg from "./GameTheorySvg";
import NetworkDesignSvg from "./NetworkDesignSvg";
import TokenomicsSvg from "./TokenomicsSvg";
import DitoCreditsSuccessSvg from "./DitoCreditsSuccessSvg";

export default {
  title: "SVGComponents/SwIconsSvg",
  component: SwIconsSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const JoinSelTemplate: Story<SvgInputModel> = (args) => (
  <JoinSelSvg {...args} />
);
const JoinUnselTemplate: Story<SvgInputModel> = (args) => (
  <JoinSelSvg {...args} />
);
const CreateUnselTemplate: Story<SvgInputModel> = (args) => (
  <CreateUnselSvg {...args} />
);
const DitoCreditsTemplate: Story<SvgInputModel> = (args) => (
  <DitoCreditsSvg {...args} />
);
const DitoCreditsSuccessTemplate: Story<SvgInputModel> = (args) => (
  <DitoCreditsSuccessSvg {...args} />
);
const GameTheoryTemplate: Story<SvgInputModel> = (args) => (
  <GameTheorySvg {...args} />
);

const NetworkDesignTemplate: Story<SvgInputModel> = (args) => (
  <NetworkDesignSvg {...args} />
);

const TokenomicsTemplate: Story<SvgInputModel> = (args) => (
  <TokenomicsSvg {...args} />
);

// Reuse that template for creating different stories

export const JoinSel = JoinSelTemplate.bind({});
export const JoinUnsel = JoinUnselTemplate.bind({});
export const CreateUnsel = CreateUnselTemplate.bind({});
export const DitoCredits = DitoCreditsTemplate.bind({});
export const DitoCreditsSuccess = DitoCreditsSuccessTemplate.bind({});
export const GameTheory = GameTheoryTemplate.bind({});
export const NetworkDesign = NetworkDesignTemplate.bind({});
export const Tokenomics = TokenomicsTemplate.bind({});

JoinSel.args = {
  width: "100",
  height: "100",
};

JoinUnsel.args = JoinSel.args;
CreateUnsel.args = JoinSel.args;
DitoCredits.args = JoinSel.args;
DitoCreditsSuccess.args = JoinSel.args;
GameTheory.args = JoinSel.args;
NetworkDesign.args = JoinSel.args;
Tokenomics.args = JoinSel.args;
