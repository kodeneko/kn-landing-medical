import { MainBar } from '@components/main';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  argTypes: { backgroundColor: { control: 'color' } },
  args: { onClick: fn() },
  component: MainBar,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
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
