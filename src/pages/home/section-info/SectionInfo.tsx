import { CardInfo } from '@components/card';
import { Button } from '@components/form';
import { Desc } from '@components/text';
import { InfoMenu, OpeningInfoOpt } from '@globals/info';
import { useMediaMobile } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { MenuOption } from '@models/app';

import styles from './style.module.less';

const CardInfoTime = () => {
  const t = getT();
  return (
    <CardInfo
      gradient={true}
      icon={OpeningInfoOpt.icon as string}
      title={t(`info.${OpeningInfoOpt.id}.title`)}
    >
      <div className={styles.infoBody}>
        <Desc
          content={t('info.opening.descTime')}
          title={t('info.opening.titleTime')}
        />
        <Desc
          content={t('info.opening.descAddress')}
          title={t('info.opening.titleAddress')}
        />
      </div>
    </CardInfo>
  );
};

const CardInfoEle = ({ icon, id, path }: MenuOption) => {
  const t = getT();
  return (
    <CardInfo
      actions={(
        <div className={styles.actionsCont}>
          <Button onClick={() => console.log(path)}>
            {t(`info.${id}.btn`)}
          </Button>
        </div>
      )}
      icon={icon as string}
      title={t(`info.${id}.title`)}
    >
      {t(`info.${id}.desc`)}
    </CardInfo>
  );
};

const SectionInfoMobile = () => {
  return (
    <ul className={styles.galMobile}>
      {InfoMenu.map(s => (
        <li key={s.id}>
          <CardInfoEle
            icon={s.icon}
            id={s.id}
            path={s.path}
          />
        </li>
      ))}
      <li>
        <CardInfoTime />
      </li>
    </ul>
  );
};

const SectionInfoWeb = () => {
  return (
    <ul className={styles.galWeb}>
      <li>
        <CardInfoTime />
      </li>
      {InfoMenu.map(s => (
        <li key={s.id}>
          <CardInfoEle
            icon={s.icon}
            id={s.id}
            path={s.path}
          />
        </li>
      ))}
    </ul>
  );
};

const SectionInfo = () => {
  const isMobile = useMediaMobile();
  return (
    <div className={styles.cont}>
      {isMobile
        ? <SectionInfoMobile />
        : <SectionInfoWeb />}
    </div>
  );
};

export default SectionInfo;
