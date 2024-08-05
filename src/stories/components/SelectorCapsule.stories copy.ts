import { SelectorCapsule } from '@components/index';
import { servMenu } from '@globals/services';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: { options: servMenu },
  component: SelectorCapsule,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Common/SelectorCapsule'
} satisfies Meta<typeof SelectorCapsule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
