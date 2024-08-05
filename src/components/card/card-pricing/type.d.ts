import { BtnType, FormType, Menu, SizeType } from '@models/app';

type CasdPricingProps = {
  grad: boolean;
  icon: string;
  title: string;
  price: number;
  symbol: string;
  period: string;
  specs: string[];
  onClick: () => void;
};

export default CasdPricingProps;
