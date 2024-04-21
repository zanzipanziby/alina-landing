import type {Meta, StoryObj} from "@storybook/react";
import {Phone} from "./index";

const meta = {
	title: 'Components/Phone',
	tags: ['autodocs'],
	component: Phone,
} satisfies Meta<typeof Phone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};