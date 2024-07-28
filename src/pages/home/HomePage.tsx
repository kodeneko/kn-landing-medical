import { t } from '@i18n';
import React from 'react';

import styles from './styles.module.less';

const HomePage: React.FC = () => {
  return (
    <div className={styles.cont}>Home Page - { t('welcome')}</div>
  );
};

export default HomePage;
