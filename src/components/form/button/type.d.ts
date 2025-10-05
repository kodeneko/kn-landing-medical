import { BtnType, SizeType } from '@models/app';

type ButtonProps = {
  fullWide?: boolean
  href?: string
  onClick?: () => void
  secondary?: boolean
  size?: SizeType
  type?: BtnType
};

export default ButtonProps;
