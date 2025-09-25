import { Logo } from '@components/logo';
import i18n from '@i18n/index';

import styles from './style.module.less';

const MainFooter = () => {
  const { t } = i18n;
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <Logo inverse />
      </div>
      <div className={styles.center}>
        <a className={styles.link} href="https://kodeneko.com" rel="noreferrer" target="_blank">{t('credits')}</a>
      </div>
      <ul className={styles.right}>
        <li><a className={styles.link} href="#">{t('terms')}</a></li>
        <li><a className={styles.link} href="#">{t('privacy')}</a></li>
      </ul>
    </div>
  );
};

export default MainFooter;
