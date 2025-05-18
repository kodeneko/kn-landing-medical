import { FormType, SizeType } from '@models/app';

type BadgeIconProps = {
  icon: string
  invert?: boolean
  shape?: FormType
  size?: SizeType.LG | SizeType.MD
};

export default BadgeIconProps;
