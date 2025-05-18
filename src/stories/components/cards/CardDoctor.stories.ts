import type { Meta, StoryObj } from '@storybook/react';

import doctor from '@assets/pics/doctor-macizo.png';
import { CardDoctor } from '@components/index';

const meta = {
  args: { name: 'Jude Law Law',
    pic: doctor,
    surname: 'Urólogo' },
  argTypes: { },
  component: CardDoctor,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
  title: 'Card/CardDoctor'
} satisfies Meta<typeof CardDoctor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
