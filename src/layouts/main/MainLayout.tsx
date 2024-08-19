import { MainBar, MainBarMobile, MainFooter } from '@components/index';
import { useMediaMobile, useMediaTablet } from '@hooks/useMedia';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const isTablet = useMediaTablet();
  const isMobile = useMediaMobile();

  return (
    <div className={styles.cont}>
      <div className={styles.mainBar}>
        { isTablet || isMobile
          ? <MainBarMobile />
          : <MainBar /> }
      </div>
      <div className={styles.mainCont}><Outlet /></div>
      <div className={styles.mainFooter}><MainFooter /></div>
    </div>
  );
};

export default MainLayout;
