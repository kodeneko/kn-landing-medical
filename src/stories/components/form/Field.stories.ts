import { Field } from '@components/form';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    hint: 'hint',
    label: 'Field',
    placeH: 'name',
    value: 'name'
  },
  component: Field,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Form/Field'
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
export const PlaceH: Story = { args: { value: '' } };
export const NoHint: Story = { args: { hint: '' } };
