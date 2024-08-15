import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mainTitle } from '@globals/index';
import clsx from 'clsx';

import styles from './style.module.less';
import { LogoProps } from './type';

const Logo = ({ inverse = false }: LogoProps) => {
  const styleCont = clsx(styles.cont, styles[inverse
    ? 'inv'
    : 'reg']);
  return (
    <div className={styleCont}>
      <div className={styles.iconCont}>
        <FontAwesomeIcon className={styles.icon} icon={'fa-solid fa-stethoscope' as IconProp} />
      </div>
      <div className={styles.title}>{mainTitle}</div>
    </div>
  );
};

export default Logo;
