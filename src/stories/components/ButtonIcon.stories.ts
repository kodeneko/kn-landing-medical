import { ButtonIcon } from '@components/index';
import { FormType, SizeType } from '@models/app';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    icon: 'fa-solid fa-flask',
    shape: FormType.CIRCLE,
    size: SizeType.MD
  },
  component: ButtonIcon,
  parameters: { layout: 'centered' },
  tags: [ 'autodocs' ],
  title: 'Common/ButtonIcon'
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonCircle: Story = { };

export const ButtonSquare: Story = { args: { shape: FormType.SQUARE } };

export const ButtonEmpty: Story = { args: { shape: FormType.EMPTY } };

export const ButtonMd: Story = { args: { size: SizeType.MD } };

export const ButtonLg: Story = { args: { size: SizeType.LG } };

