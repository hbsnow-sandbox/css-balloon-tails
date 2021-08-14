import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PolygonBalloon } from ".";

export default {
  title: "Components/PolygonBalloon",
  component: PolygonBalloon,
} as ComponentMeta<typeof PolygonBalloon>;

const Template: ComponentStory<typeof PolygonBalloon> = (args) => (
  <PolygonBalloon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "PolygonBalloon",
};
