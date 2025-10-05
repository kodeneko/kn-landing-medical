import type { Meta, StoryObj } from '@storybook/react';

import { MainBar } from '@components/main';
import { fn } from '@storybook/test';

const meta = {
  args: { onClick: fn() },
  argTypes: { backgroundColor: { control: 'color' } },
  component: MainBar,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Main/Main Bar'
} satisfies Meta<typeof MainBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {
  args: {
    label: 'Button',
    size: 'large'
  }
};
