import { Desc } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    content: 'Lorem ipsum lorem amet dolor',
    title: 'Lorem'
  },
  component: Desc,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Text/Desc'
} satisfies Meta<typeof Desc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
