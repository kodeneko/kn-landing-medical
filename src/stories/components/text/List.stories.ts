import type { Meta, StoryObj } from '@storybook/react';

import { List } from '@components/index';

const meta = {
  args: { list: ['Lorem Ipsom lorem dolor amer', 'Lorem Ipsom lorem dolor amer', 'Lorem Ipsom lorem dolor amer'] },
  argTypes: { },
  component: List,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Text/List'
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };

export const Inverse: Story = { args: { inverse: true } };
