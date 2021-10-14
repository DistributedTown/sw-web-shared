import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SvgInputModel } from "../input.model";
import ProjectsSvg from "./ProjectsSvg";
import YourContributionsSvg from "./YourContributionsSvg";
import { ScoreReachedSvg } from "../../..";
import ProjectsCreatedSvg from "./ProjectsCreatedSvg";
import ParticipationRateSvg from "./ParticipationRateSvg";
import MilestonesSvg from "./MilestonesSvg";
import MilestonesCompletedSvg from "./MilestonesCompletedSvg";

export default {
  title: "Components/ProjectsSvg",
  component: ProjectsSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const YourContributionTemplate: Story<SvgInputModel> = (args) => (
  <YourContributionsSvg {...args} />
);
const ScoreReachedTemplate: Story<SvgInputModel> = (args) => (
  <ScoreReachedSvg {...args} />
);
const ProjectsCreatedTemplate: Story<SvgInputModel> = (args) => (
  <ProjectsCreatedSvg {...args} />
);
const ParticipationRateTemplate: Story<SvgInputModel> = (args) => (
  <ParticipationRateSvg {...args} />
);
const MilestonesTemplate: Story<SvgInputModel> = (args) => (
  <MilestonesSvg {...args} />
);
const MilestonesCompletedTemplate: Story<SvgInputModel> = (args) => (
  <MilestonesCompletedSvg {...args} />
);

// Reuse that template for creating different stories

export const YourContribution = YourContributionTemplate.bind({});
export const ScoreReached = ScoreReachedTemplate.bind({});
export const ProjectsCreated = ProjectsCreatedTemplate.bind({});
export const ParticipationRate = ParticipationRateTemplate.bind({});
export const Milestones = MilestonesTemplate.bind({});
export const MilestonesCompleted = MilestonesCompletedTemplate.bind({});

YourContribution.args = {
  width: "100",
  height: "100",
};

ScoreReached.args = YourContribution.args;
ProjectsCreated.args = YourContribution.args;
ParticipationRate.args = YourContribution.args;
Milestones.args = YourContribution.args;
MilestonesCompleted.args = YourContribution.args;
