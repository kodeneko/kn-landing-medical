import type { Meta, StoryObj } from '@storybook/react';

import { BadgeIcon } from '@components/index';
import { FormType, SizeType } from '@models/app';

const meta = {
  args: {
    icon: 'fa-solid fa-flask',
    shape: FormType.CIRCLE,
    size: SizeType.MD
  },
  argTypes: { },
  component: BadgeIcon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  title: 'Common/BadgeIcon'
} satisfies Meta<typeof BadgeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonCircle: Story = { };

export const ButtonSquare: Story = { args: { shape: FormType.SQUARE } };

export const ButtonEmpty: Story = { args: { shape: FormType.EMPTY } };

export const ButtonInvert: Story = { args: { invert: true } };

export const ButtonMd: Story = { args: { size: SizeType.MD } };

export const ButtonLg: Story = { args: { size: SizeType.LG } };
