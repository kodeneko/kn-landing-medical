import { MainBar, MainBarMobile, MainFooter } from '@components/index';
import { useMediaMobile, useMediaTablet } from '@hooks/useMedia';
import { motion as m } from 'motion/react';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const isTablet = useMediaTablet();
  const isMobile = useMediaMobile();
  console.log(isTablet, isMobile);
  return (
    <div
      className={styles.cont}
    >
      <m.div
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.mainBar}
        initial={{ opacity: 0, translateY: -100 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        { isTablet || isMobile
          ? <MainBarMobile />
          : <MainBar /> }
      </m.div>
      <div className={styles.mainCont}><Outlet /></div>
      <div className={styles.mainFooter}><MainFooter /></div>
    </div>
  );
};

export default MainLayout;
