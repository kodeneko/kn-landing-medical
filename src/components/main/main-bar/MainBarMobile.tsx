import { BadgeIcon } from '@components/badge-icon';
import { Logo } from '@components/logo';
import { Overlay } from '@components/overlay';
import { mainMenu } from '@globals/menu';
import i18n from '@i18n/index';
import { FormType, SizeType } from '@models/app';
import { AnimatePresence, motion as m } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './style.module.less';

const MainBarMobile = () => {
  const { t } = i18n;
  const [swMenu, setSwMenu] = useState(false);

  return (
    <div className={styles.wrap}>
      <AnimatePresence>
        {swMenu && (
          <m.div
            animate={{ opacity: 1, translateY: 0 }}
            className={styles.menu}
            exit={{ opacity: 0, translateY: -100 }}
            initial={{ opacity: 0, translateY: -100 }}
            transition={{ duration: 0.5 }}
          >
            <ul className={styles.sections}>
              <li className={styles.close}>
                <div onClick={() => setSwMenu(false)}>
                  <BadgeIcon
                    icon="fa-solid fa-circle-xmark"
                    size={SizeType.MD}
                  />
                </div>
              </li>
              {mainMenu.map(opt => (
                <li key={opt.id}>
                  <Link
                    onClick={() => setSwMenu(false)}
                    to={`/${opt.id}`}
                  >
                    {t(`labels.${opt.id}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
      <div className={styles.bar}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>
          <button className={styles.btnMenu} onClick={() => setSwMenu(!swMenu)}>
            <BadgeIcon icon="fa-solid fa-bars" shape={FormType.SQUARE} />
          </button>
        </div>
      </div>
      <Overlay isVisible={swMenu} />
    </div>
  );
};

export default MainBarMobile;
