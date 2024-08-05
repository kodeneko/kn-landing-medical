import { BtnType, SizeType } from '@models/app';
import clsx from 'clsx';
import React from 'react';

import styles from './style.module.less';
import ButtonProps from './type';

type ButtonPropsWithChildren = React.PropsWithChildren<ButtonProps>;

const Button = ({ children, type = BtnType.BTN, size = SizeType.MD, fullWide = false, href, onClick }: ButtonPropsWithChildren) => {
  const stylesBtn = clsx(styles.btn, styles[size], styles[fullWide
    ? 'wide'
    : 'content']);
  return (
    type == BtnType.BTN
      ? <button className={stylesBtn} onClick={onClick}>{children}</button>
      : <a className={stylesBtn} href={href ?? ''}>{children}</a>
  );
};

export default Button;
