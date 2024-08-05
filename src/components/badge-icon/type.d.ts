import { BtnType, FormType, SizeType } from '@models/app';

type BadgeIconProps = {
  shape?: FormType;
  invert?: boolean;
  size?: SizeType.MD | SizeType.LG;
  icon: string;
};

export default BadgeIconProps;
