import { MainBar, MainFooter } from '@components/index';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.mainBar}><MainBar /></div>
      <div className={styles.mainCont}><Outlet /></div>
      <div className={styles.mainFooter}><MainFooter /></div>
    </div>
  );
};

export default MainLayout;
