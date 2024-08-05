import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mainTitle } from '@globals/index';

import styles from './style.module.less';

const Logo = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.iconCont}>
        <FontAwesomeIcon className={styles.icon} icon={'fa-solid fa-stethoscope' as IconProp} />
      </div>
      <div className={styles.title}>{mainTitle}</div>
    </div>
  );
};

export default Logo;
