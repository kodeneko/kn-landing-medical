import type { Meta, StoryObj } from '@storybook/react';

import { Logo } from '@components/index';
import { fn } from '@storybook/test';

const meta = {
  args: { onClick: fn() },
  argTypes: { backgroundColor: { control: 'color' } },
  component: Logo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Common/Logo'
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
