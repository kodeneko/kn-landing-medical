import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BtnType, FormType, SizeType } from '@models/app';
import clsx from 'clsx';

import styles from './style.module.less';
import ButtonIconProps from './type';

const Button = ({ shape = FormType.CIRCLE, type = BtnType.BTN, size = SizeType.MD, href, onClick, icon }: ButtonIconProps) => {
  const stylesBtn = clsx(styles.btn, styles[size], styles[shape]);
  console.log(stylesBtn);
  const iconCompo = <FontAwesomeIcon className={styles.icon} icon={icon as IconName} />;
  return (
    type == BtnType.BTN
      ? <button className={stylesBtn} onClick={onClick}>{iconCompo}</button>
      : <a className={stylesBtn} href={href ?? ''}>{iconCompo}</a>
  );
};

export default Button;
