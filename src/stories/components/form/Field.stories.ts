import type { Meta, StoryObj } from '@storybook/react';

import { Field } from '@components/form';

const meta = {
  args: {
    hint: 'hint',
    label: 'Field',
    placeH: 'name',
    value: 'name'
  },
  argTypes: { },
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Form/Field'
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
export const PlaceH: Story = { args: { value: '' } };
export const NoHint: Story = { args: { hint: '' } };
