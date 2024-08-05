import { CardPricing } from '@components/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: { },
  args: {
    icon: 'fa-solid fa-credit-card',
    period: 'mes',
    price: 50,
    specs: [
      'lorem ipsum lorem',
      'lorem ipsum lorem',
      'lorem ipsum lorem',
      'lorem ipsum lorem',
      'lorem ipsum lorem'
    ],
    symbol: '€',
    title: 'Copago'
  },
  component: CardPricing,
  parameters: { layout: 'fullscreen' },
  tags: [ 'autodocs' ],
  title: 'Card/CardPricing'
} satisfies Meta<typeof CardPricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Def: Story = { };
export const Grad: Story = { args: { grad: true } };
