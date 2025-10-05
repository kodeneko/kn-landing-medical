import { Logo } from '@components/logo';
import { pathCookies, pathLegal, pathPrivacy } from '@globals/paths';
import i18n from '@i18n/index';
import { Link } from 'react-router-dom';

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
        <li><Link className={styles.link} to={pathLegal}>{t('labels.legal')}</Link></li>
        <li><Link className={styles.link} to={pathPrivacy}>{t('labels.privacy')}</Link></li>
        <li><Link className={styles.link} to={pathCookies}>{t('labels.cookies')}</Link></li>
      </ul>
    </div>
  );
};

export default MainFooter;
