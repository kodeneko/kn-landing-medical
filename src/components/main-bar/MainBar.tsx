import { StoreType } from '@store/redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './style.module.less';

const MainBar = () => {
  const user = useSelector((state: StoreType) => state.user);
  const [ sw, setSw ] = useState(false);
  return (
    <div className={styles.cont}>
      <div>MainBar - Lang: {user.lang}</div>
      <div>
        <button onClick={() => setSw(!sw)}>{sw
          ? 'ON'
          : 'OFF'}
        </button>
      </div>
    </div>
  );
};

export default MainBar;
