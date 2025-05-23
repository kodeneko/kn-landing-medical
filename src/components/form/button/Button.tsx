import { BtnType, SizeType } from '@models/app';
import clsx from 'clsx';
import React from 'react';

import styles from './style.module.less';
import ButtonProps from './type';

type ButtonPropsWithChildren = React.PropsWithChildren<ButtonProps>;

const Button = ({
  children,
  fullWide = false,
  href,
  onClick,
  secondary = false,
  size = SizeType.MD,
  type = BtnType.BTN
}: ButtonPropsWithChildren) => {
  const stylesBtn = clsx(
    styles[size],
    styles[fullWide ? 'wide' : 'content'],
    styles[secondary ? 'sec' : 'def'],
    styles.btn
  );
  return (
    type == BtnType.BTN
      ? <button className={stylesBtn} onClick={onClick}>{children}</button>
      : <a className={stylesBtn} href={href ?? ''}>{children}</a>
  );
};

export default Button;
