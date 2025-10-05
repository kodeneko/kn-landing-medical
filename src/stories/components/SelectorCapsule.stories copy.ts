import type { Meta, StoryObj } from '@storybook/react';

import { SelectorCapsule } from '@components/index';
import { servMenu } from '@globals/services';

const meta = {
  args: { options: servMenu },
  argTypes: { },
  component: SelectorCapsule,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Common/SelectorCapsule'
} satisfies Meta<typeof SelectorCapsule>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
