import { CardInfo } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.',
    gradient: false,
    icon: 'fa-solid fa-user-doctor',
    title: 'Find Doctors'
  },
  component: CardInfo,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Card/CardInfo'
} satisfies Meta<typeof CardInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };

export const Gradient: Story = { args: { gradient: true } };
