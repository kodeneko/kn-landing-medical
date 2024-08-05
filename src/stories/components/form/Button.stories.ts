import { Button } from '@components/form';
import { SizeType } from '@models/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: { children: 'This is a Label' },
  component: Button,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Form/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonMd: Story = { args: { size: SizeType.MD } };

export const ButtonLg: Story = { args: { size: SizeType.LG } };

export const ButtonXl: Story = { args: { size: SizeType.XL } };

export const ButtonFullWidth: Story = { args: { fullWide: true } };
