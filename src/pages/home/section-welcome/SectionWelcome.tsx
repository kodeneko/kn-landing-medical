import { Button } from '@components/form';
import { t } from '@i18n/index';

import styles from './style.module.less';

const SectionWelcome = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.desc}>
        <h2 className={styles.title}>{t('welcome.title')}</h2>
        <p className={styles.txt}>{t('welcome.desc')}</p>
        <div className={styles.actions}>
          <Button>{t('labels.findDoc')}</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionWelcome;
