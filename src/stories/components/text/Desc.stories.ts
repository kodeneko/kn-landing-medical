import type { Meta, StoryObj } from '@storybook/react';

import { Desc } from '@components/index';

const meta = {
  args: { content: 'Lorem ipsum lorem amet dolor',
    title: 'Lorem' },
  argTypes: { },
  component: Desc,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Text/Desc'
} satisfies Meta<typeof Desc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
