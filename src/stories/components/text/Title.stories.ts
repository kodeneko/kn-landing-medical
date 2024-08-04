import { Title } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: { title: 'Lorem' },
  component: Title,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Text/Title'
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { args: { subTitle: 'lorem ipsum' } };

export const NoSub: Story = {};
