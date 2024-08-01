import { t } from '@i18n/index';

import styles from './style.module.less';

const SectionWelcome = () => {
  return (
    <div className={styles.cont}>SectionWelcome - { t('welcome')}</div>
  );
};

export default SectionWelcome;
