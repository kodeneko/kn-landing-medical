import { BtnType, FormType, SizeType } from '@models/app';

type ButtonIconProps = {
  type?: BtnType;
  shape?: FormType;
  size?: SizeType.MD | SizeType.LG;
  href?: string;
  onClick?: () => void;
  icon: string;
};

export default ButtonIconProps;
