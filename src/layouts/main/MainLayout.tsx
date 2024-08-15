import { MainBar, MainBarMobile, MainFooter } from '@components/index';
import { useMediaWeb } from '@hooks/useMedia';
import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const swScreen = useMediaWeb();
  console.log('swScreen', swScreen);
  return (
    <div className={styles.cont}>
      <div className={styles.mainBar}>
        { swScreen
          ? <MainBarMobile />
          : <MainBar /> }
      </div>
      <div className={styles.mainCont}><Outlet /></div>
      <div className={styles.mainFooter}><MainFooter /></div>
    </div>
  );
};

export default MainLayout;
