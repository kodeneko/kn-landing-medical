import { t } from '@i18n/index';
import { StoreType } from '@store/redux';
import React from 'react';
import { useSelector, useStore } from 'react-redux';

import styles from './styles.module.less';

const HomePage: React.FC = () => {
  const user = useSelector((state: StoreType) => state.user);
  return (
    <div className={styles.cont}>Home Page - {t('welcome')} - {user.lang}</div>
  );
};

export default HomePage;
