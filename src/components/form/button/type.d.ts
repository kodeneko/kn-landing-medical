import { BtnType, SizeType } from '@models/app';

type ButtonProps = {
  type?: BtnType;
  size?: SizeType;
  fullWide?: boolean;
  href?: string;
  onClick?: () => void;
};

export default ButtonProps;
