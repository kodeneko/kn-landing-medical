import React from 'react';

type CasdPricingProps = {
  grad?: boolean
  icon: string
  onClick?: () => void
  period: string
  price: string
  specs: React.JSX.Element[]
  symbol: string
  title: string
};

export default CasdPricingProps;
