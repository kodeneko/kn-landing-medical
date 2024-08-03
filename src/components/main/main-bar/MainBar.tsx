import { Logo } from '@components/logo';
import { mainMenu } from '@globals/menu';
import { t } from '@i18n/index';

import styles from './style.module.less';

const MainBar = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <Logo />
        <ul className={styles.menu}>
          {mainMenu.map((opt) => <li key={opt.id}>
            <a href={`#${opt.id}`}>{t(`labels.${opt.id}`)}</a>
          </li>)}
        </ul>
      </div>
      <div className={styles.right}>
        <button>{t('labels.appointment')}</button>
      </div>
    </div>
  );
};

export default MainBar;
