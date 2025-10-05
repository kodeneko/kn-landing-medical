import { MainBar, MainBarMobile, MainFooter } from '@components/index';
import { useMediaMobile, useMediaTablet } from '@hooks/useMedia';
import i18n from '@i18n/index';
import { motion as m } from 'motion/react';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  const { t } = i18n;

  useEffect(() => {
    const onLanguageChanged = () => {
      document.title = t('webTitle');
    };
    i18n.on('languageChanged', onLanguageChanged);
    return () => {
      i18n.off('languageChanged', onLanguageChanged);
    };
  }, [t, i18n]);

  const isTablet = useMediaTablet();
  const isMobile = useMediaMobile();

  return (
    <div
      className={styles.cont}
    >
      <m.div
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.mainBar}
        initial={{ opacity: 0, translateY: -100 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        { isTablet || isMobile
          ? <MainBarMobile />
          : <MainBar /> }
      </m.div>
      <div className={styles.mainCont}><Outlet /></div>
      <m.div
        animate={{ opacity: 1, translateY: 0 }}
        className={styles.mainFooter}
        initial={{ opacity: 0, translateY: 50 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <MainFooter />
      </m.div>
    </div>
  );
};

export default MainLayout;
