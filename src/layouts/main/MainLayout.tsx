import React from 'react';

import styles from './styles.module.less';

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={styles.cont}>{ children}</div>
  );
};

export default MainLayout;
