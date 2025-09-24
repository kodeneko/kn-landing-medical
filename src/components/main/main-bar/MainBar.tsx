import { Button } from '@components/form';
import { Logo } from '@components/logo';
import { mainMenu } from '@globals/menu';
import { getT } from '@i18n/index';
import { Sections } from '@models/app';
import { useUser } from '@store/zustand';

import styles from './style.module.less';

const MainBar = () => {
  const t = getT();
  const scrollToSection = useUser(state => state.scrollToSection);
  const handleClickOpt = (id: Sections) => scrollToSection(id);

  return (
    <div className={styles.cont}>
      <div className={styles.left}>
        <Logo />
        <ul className={styles.menu}>
          {mainMenu.map(opt => (
            <li key={opt.id}>
              <a href={`#${opt.id}`} onClick={() => handleClickOpt(opt.id)}>{t(`labels.${opt.id}`)}</a>
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
