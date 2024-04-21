import type {Meta, StoryObj} from "@storybook/react";
import {Button} from " /components/ui/Button";

const meta = {
	title: 'Components/Button',
	tags: ['autodocs'],
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args:{
		children:<span>Кнопка</span>
	}
};