import { Button } from '@components/form';
import i18n from '@i18n/index';
import { BtnType } from '@models/app';
import React from 'react';

import styles from './styles.module.less';

const NotFoundPage: React.FC = () => {
  const { t } = i18n;

  return (
    <section className={styles.cont}>
      <header className={styles.header}>
        <h2>{t('notFound.title')}</h2>
        <h3>{t('notFound.subTitle')}</h3>
      </header>
      <div className={styles.body}>
        <p className={styles.desc}>{t('notFound.desc')}</p>
        <Button
          href="/"
          type={BtnType.LINK}
        >
          {t('labels.backToHome')}
        </Button>
      </div>
    </section>
  );
};

export default NotFoundPage;
