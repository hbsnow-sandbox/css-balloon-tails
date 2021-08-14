import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ConicBalloon } from ".";

export default {
  title: "Components/ConicBalloon",
  component: ConicBalloon,
} as ComponentMeta<typeof ConicBalloon>;

const Template: ComponentStory<typeof ConicBalloon> = (args) => (
  <ConicBalloon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "ConicBalloon",
};
