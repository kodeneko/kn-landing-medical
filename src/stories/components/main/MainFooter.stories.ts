import type { Meta, StoryObj } from '@storybook/react';

import { MainFooter } from '@components/main';

const meta = {
  args: { },
  argTypes: { backgroundColor: { control: 'color' } },
  component: MainFooter,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Main/Main Footer'
} satisfies Meta<typeof MainFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
