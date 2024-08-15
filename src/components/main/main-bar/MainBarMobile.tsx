import { BadgeIcon } from '@components/badge-icon';
import { Logo } from '@components/logo';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mainMenu } from '@globals/menu';
import { t } from '@i18n/index';
import { FormType, SizeType } from '@models/app';
import { useState } from 'react';

import styles from './style.module.less';

const MainBarMobile = () => {
  const [ swMenu, setSwMenu ] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles.menu} style={{
        display: swMenu
          ? 'block'
          : 'none'
      }}>
        <ul className={styles.sections}>
          <li className={styles.close}>
            <div onClick={() => setSwMenu(false)}>
              <BadgeIcon
                icon={'fa-solid fa-circle-xmark'}
                size={SizeType.MD}
              />
            </div>
          </li>
          {mainMenu.map((opt) => <li key={opt.id}>
            <a href={`#${opt.id}`}>{t(`labels.${opt.id}`)}</a>
          </li>)}
        </ul>
      </div>
      <div className={styles.bar}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <button onClick={() => setSwMenu(!swMenu)}>
            <BadgeIcon icon={'fa-solid fa-bars'} shape={FormType.SQUARE} />
          </button>
        </div>
      </div>
    </div>

  );
};

export default MainBarMobile;
