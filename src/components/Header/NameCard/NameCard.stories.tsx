import {NameCard} from "./";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
	title: 'Components/NameCard',
	tags: ['autodocs'],
	component: NameCard,
} satisfies Meta<typeof NameCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <div style={{
			display: 'flex',
			flexGrow: '1',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
			marginTop: "-20px"
		}}>
			<span>Aля</span>
			<span>Паланевич</span>
		</div>
	}
};