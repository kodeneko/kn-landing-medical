import React from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.less';

const MainLayout: React.FC = () => {
  return (
    <div className={styles.cont}>
      <Outlet />
    </div>
  );
};

export default MainLayout;
