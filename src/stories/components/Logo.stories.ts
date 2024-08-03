import { Logo } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  argTypes: { backgroundColor: { control: 'color' } },
  args: { onClick: fn() },
  component: Logo,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Common/Logo'
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
