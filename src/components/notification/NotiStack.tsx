import type { IconProp } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import NotiHub from './NotiHub';
import styles from './styles.module.less';
import { Noti } from './types';

const notiHub: NotiHub = NotiHub.getInstance();

type NotiTagProps = {
  noti: Noti
};

const NotiTag: React.FunctionComponent<NotiTagProps> = ({
  noti
}: NotiTagProps) => {
  return (
    <div className={styles.tag}>
      <div onClick={() => notiHub.deleteMsg(noti.id as string)}>
        <FontAwesomeIcon
          className={styles.close}
          icon={'fa-regular fa-circle-xmark' as IconProp}
        />
      </div>
      <div className={styles.msg}>{noti.msg}</div>
    </div>
  );
};

const NotiStack: React.FunctionComponent = () => {
  const [idSub, setIdSub] = useState<string>('');
  const [notiList, setNotiList] = useState<Noti[]>([]);

  const callbackHub = (list: Noti[]) => {
    setNotiList(list);
  };

  useEffect(() => {
    if (idSub === '') {
      const id: string = notiHub.subscribe(callbackHub);
      setIdSub(id);
    }
    return () => notiHub.unsubscribe(idSub);
  }, []);

  return (
    <div className={styles.stack}>
      <AnimatePresence>
        {notiList.map((n: Noti) => (
          <motion.div
            animate={{ transform: 'translateX(0)' }}
            exit={{ transform: 'translateX(21.88rem)' }}
            initial={{ transform: 'translateX(21.88rem)' }}
            key={n.id}
          >
            <NotiTag noti={n} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotiStack;
export { NotiTag };
