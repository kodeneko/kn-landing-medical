import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormType, SizeType } from '@models/app';
import clsx from 'clsx';

import styles from './style.module.less';
import BadgeIconProps from './type';

const BadgeIcon = ({ shape = FormType.CIRCLE, invert = false, size = SizeType.MD, icon }: BadgeIconProps) => {
  const styleWrap = clsx(styles.wrap, styles[size], styles[shape], styles[invert
    ? 'invert'
    : 'reg']);

  return (
    <div className={styleWrap}>
      <FontAwesomeIcon
        className={styles.icon}
        icon={icon as IconName}
      />
    </div>
  );
};

export default BadgeIcon;
