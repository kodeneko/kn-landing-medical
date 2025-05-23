import React from 'react';

type CardPricingProps = {
  grad?: boolean
  icon: string
  onClick?: () => void
  period: string
  price: string
  specs: React.JSX.Element[]
  symbol: string
  title: string
};

export default CardPricingProps;
