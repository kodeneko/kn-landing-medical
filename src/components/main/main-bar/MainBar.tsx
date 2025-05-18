import { Button } from '@components/form';
import { Logo } from '@components/logo';
import { mainMenu } from '@globals/menu';
import { getT } from '@i18n/index';

import styles from './style.module.less';

const MainBar = () => {
  const t = getT();
  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <Logo />
        <ul className={styles.menu}>
          {mainMenu.map(opt => (
            <li key={opt.id}>
              <a href={`#${opt.id}`}>{t(`labels.${opt.id}`)}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <Button>{t('labels.appointment')}</Button>
      </div>
    </div>
  );
};

export default MainBar;
