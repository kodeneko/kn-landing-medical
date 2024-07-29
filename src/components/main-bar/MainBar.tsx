import { StoreType } from '@store/redux';
import { useSelector } from 'react-redux';

import styles from './style.module.less';

const MainBar = () => {
  const user = useSelector((state: StoreType) => state.user);
  return (
    <div className={styles.cont}>MainBar - Lang: { user.lang }</div>
  );
};

export default MainBar;
