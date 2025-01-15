import { ContactForm } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: { },
  component: ContactForm,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Common/ContactForm'
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
