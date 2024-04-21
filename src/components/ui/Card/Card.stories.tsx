import type {Meta, StoryObj} from "@storybook/react";
import {Card} from " /components/ui/Card";

const meta = {
	title: 'Components/Card',
	tags: ['autodocs'],
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args:{
		children: <span>Карточка</span>
	}
};