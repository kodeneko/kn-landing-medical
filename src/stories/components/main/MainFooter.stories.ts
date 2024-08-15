import { MainFooter } from '@components/main';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { backgroundColor: { control: 'color' } },
  args: { },
  component: MainFooter,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Main/Main Footer'
} satisfies Meta<typeof MainFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
