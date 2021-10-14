import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { SvgInputModel } from "../input.model";
import BackgroundShapesSvg from "./BackgroundShapesSvg";
import LayerBlurSvg from "./LayerBlurSvg";
import {
  Shape1Svg,
  Shape2Svg,
  Shape3Svg,
  Shape4Svg,
  Shape5Svg,
  Shape6Svg,
  Shape7Svg,
} from "../../..";

export default {
  title: "SVGComponents/BackgroundShapesSvg",
  component: BackgroundShapesSvg,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

// Create a master template for mapping args to render the Button component

const LayerBlurTemplate: Story<SvgInputModel> = (args) => (
  <LayerBlurSvg {...args} />
);
const Shape1Template: Story<SvgInputModel> = (args) => <Shape1Svg {...args} />;
const Shape2Template: Story<SvgInputModel> = (args) => <Shape2Svg {...args} />;
const Shape3Template: Story<SvgInputModel> = (args) => <Shape3Svg {...args} />;
const Shape4Template: Story<SvgInputModel> = (args) => <Shape4Svg {...args} />;
const Shape5Template: Story<SvgInputModel> = (args) => <Shape5Svg {...args} />;
const Shape6Template: Story<SvgInputModel> = (args) => <Shape6Svg {...args} />;
const Shape7Template: Story<SvgInputModel> = (args) => <Shape7Svg {...args} />;

// Reuse that template for creating different stories

export const LayerBlur = LayerBlurTemplate.bind({});
export const Shape1 = Shape1Template.bind({});
export const Shape2 = Shape2Template.bind({});
export const Shape3 = Shape3Template.bind({});
export const Shape4 = Shape4Template.bind({});
export const Shape5 = Shape5Template.bind({});
export const Shape6 = Shape6Template.bind({});
export const Shape7 = Shape7Template.bind({});

LayerBlur.args = {
  width: "1366",
  height: "768",
};
Shape1.args = {
  width: "234",
  height: "628",
};
Shape2.args = {
  width: "295",
  height: "393",
};
Shape3.args = {
  width: "130",
  height: "100",
};
Shape4.args = {
  width: "100",
  height: "100",
};
Shape5.args = {
  width: "295",
  height: "393",
};
Shape6.args = {
  width: "295",
  height: "393",
};
Shape7.args = {
  width: "295",
  height: "393",
};
