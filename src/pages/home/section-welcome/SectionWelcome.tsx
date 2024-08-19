import { Button } from '@components/form';
import { getT } from '@i18n/index';

import styles from './style.module.less';

const SectionWelcome = () => {
  const t = getT();
  return (
    <div className={styles.cont}>
      <div className={styles.desc}>
        <h2 className={styles.title}>{t('welcomeSec.title')}</h2>
        <p className={styles.txt}>{t('welcomeSec.desc')}</p>
        <div className={styles.actions}>
          <Button>{t('labels.findDoc')}</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionWelcome;
