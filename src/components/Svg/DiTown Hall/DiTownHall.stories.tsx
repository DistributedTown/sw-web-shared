import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import DiTownHallSvg from "./DitownHallSvg";
import { TreasurySelSvg, TreasurySvg } from "../../..";
import { SvgInputModel } from "../input.model";
import ProjectsSvg from "./ProjectsSvg";
import ProjectsSelSvg from "./ProjectsSelSvg";
import OpenGigsSvg from "./OpenGigsSvg";
import OpenGigsSelSvg from "./OpenGigsSelSvg";

export default {
  title: "SVGComponents/DiTownHallSvg",
  component: DiTownHallSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const TreasuryTemplate: Story<SvgInputModel> = (args) => (
  <TreasurySvg {...args} />
);
const TreasurySelTemplate: Story<SvgInputModel> = (args) => (
  <TreasurySelSvg {...args} />
);
const ProjectsTemplate: Story<SvgInputModel> = (args) => (
  <ProjectsSvg {...args} />
);
const ProjectsSelTemplate: Story<SvgInputModel> = (args) => (
  <ProjectsSelSvg {...args} />
);
const OpenGigsTemplate: Story<SvgInputModel> = (args) => (
  <OpenGigsSvg {...args} />
);
const OpenGigsSelTemplate: Story<SvgInputModel> = (args) => (
  <OpenGigsSelSvg {...args} />
);

// Reuse that template for creating different stories

export const Treasury = TreasuryTemplate.bind({});
export const TreasurySel = TreasurySelTemplate.bind({});
export const Projects = ProjectsTemplate.bind({});
export const ProjectsSel = ProjectsSelTemplate.bind({});
export const OpenGigs = OpenGigsTemplate.bind({});
export const OpenGigsSel = OpenGigsSelTemplate.bind({});

Treasury.args = {
  width: "100",
  height: "100",
};

TreasurySel.args = Treasury.args;
Projects.args = Treasury.args;
ProjectsSel.args = Treasury.args;
OpenGigs.args = Treasury.args;
OpenGigsSel.args = Treasury.args;
