import { Button } from '@components/form';
import { getT } from '@i18n/index';
import { motion as m } from 'motion/react';

import styles from './style.module.less';

const SectionWelcome = () => {
  const t = getT();
  return (
    <m.div
      animate={{ backgroundPosition: 'bottom -1rem right -4rem, bottom 0rem right 0rem', opacity: 1 }}
      className={styles.cont}
      initial={{ backgroundPosition: 'bottom -1rem right -8rem, bottom 0rem right -4rem', opacity: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <m.div
        animate={{ translateX: 0 }}
        className={styles.desc}
        initial={{ translateX: -200 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <h2 className={styles.title}>{t('welcomeSec.title')}</h2>
        <p className={styles.txt}>{t('welcomeSec.desc')}</p>
        <div className={styles.actions}>
          <Button>{t('labels.findDoc')}</Button>
        </div>
      </m.div>
    </m.div>
  );
};

export default SectionWelcome;
