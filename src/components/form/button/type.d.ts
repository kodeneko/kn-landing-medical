import { BtnType, SizeType } from '@models/app';

type ButtonProps = {
  type?: BtnType;
  size?: SizeType;
  href?: string;
  onClick?: () => void;
};

export default ButtonProps;
