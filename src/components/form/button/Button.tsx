import { BtnType, SizeType } from '@models/app';
import clsx from 'clsx';
import React from 'react';

import styles from './style.module.less';
import ButtonProps from './type';

type ButtonPropsWithChildren = React.PropsWithChildren<ButtonProps>;

const Button: ButtonPropsWithChildren = ({ children, type = BtnType.BTN, size = SizeType.MD, href, onClick }) => {
  const stylesBtn = clsx(styles.btn, styles[size]);
  return (
    type == BtnType.BTN
      ? <button className={stylesBtn} onClick={onClick}>{children}</button>
      : <a className={stylesBtn} href={href ?? ''}>{children}</a>
  );
};

export default Button;
