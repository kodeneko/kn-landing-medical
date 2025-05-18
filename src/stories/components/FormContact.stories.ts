import type { Meta, StoryObj } from '@storybook/react';

import { ContactForm } from '@components/index';

const meta = {
  args: { },
  argTypes: { },
  component: ContactForm,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Common/ContactForm'
} satisfies Meta<typeof ContactForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = {};
