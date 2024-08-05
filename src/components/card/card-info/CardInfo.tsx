import { BadgeIcon } from '@components/badge-icon';
import { FormType } from '@models/app';
import clsx from 'clsx';
import React from 'react';

import styles from './style.module.less';
import CardInfoProps from './type';

type CardInfoPropsWithChildren = React.PropsWithChildren<CardInfoProps>;

const CardInfo = ({ children, title, icon, gradient = false, actions }: CardInfoPropsWithChildren) => {
  const contStyles = clsx(styles.cont, styles[gradient
    ? 'grad'
    : 'shadow']);
  return (
    <div className={contStyles}>
      <header className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}><BadgeIcon icon={icon} shape={gradient
          ? FormType.EMPTY
          : FormType.SQUARE} />
        </div>
      </header>
      <div className={styles.body}>{children}</div>
      <footer className={styles.footer}>{actions}</footer>
    </div>
  );
};

export default CardInfo;
