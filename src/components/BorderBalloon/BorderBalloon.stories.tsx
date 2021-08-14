import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BorderBalloon } from ".";

export default {
  title: "Components/BorderBalloon",
  component: BorderBalloon,
} as ComponentMeta<typeof BorderBalloon>;

const Template: ComponentStory<typeof BorderBalloon> = (args) => (
  <BorderBalloon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "BorderBalloon",
};
