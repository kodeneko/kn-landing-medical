import { List } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    list: [
      'Lorem Ipsom lorem dolor amer',
      'Lorem Ipsom lorem dolor amer',
      'Lorem Ipsom lorem dolor amer'
    ]
  },
  component: List,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Text/List'
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };

export const Inverse: Story = { args: { inverse: true } };
