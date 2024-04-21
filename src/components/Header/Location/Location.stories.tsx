import type {Meta, StoryObj} from "@storybook/react";
import {Location} from "./";

const meta = {
	title: 'Components/Location',
	tags: ['autodocs'],
	component: Location,
} satisfies Meta<typeof Location>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		textFirstLine: 'Червень,',
		textSecondLine:'и за пределами'
	}
};