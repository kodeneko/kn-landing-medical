import { BtnType, FormType, Menu, SizeType } from '@models/app';
import React from 'react';

type CasdPricingProps = {
  grad?: boolean;
  icon: string;
  title: string;
  price: string;
  symbol: string;
  period: string;
  specs: React.JSX.Element[];
  onClick?: () => void;
};

export default CasdPricingProps;
