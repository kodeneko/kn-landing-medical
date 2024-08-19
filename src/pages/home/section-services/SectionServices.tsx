import { Button } from '@components/form';
import { SelectorCapsule } from '@components/selector-capsule';
import { Title } from '@components/text';
import { servMenu } from '@globals/services';
import { useMediaTablet, useMediaWeb } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { ServiceOpt } from '@models/app';
import { useState } from 'react';

import styles from './style.module.less';

const InfoService = ({ title, desc, onClick }) => {
  const t = getT();
  return (
    <div className={styles.infoService}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.footer}>
        <Button onClick={onClick}>{t('labels.moreInfo')}</Button>
      </div>
    </div>
  );
};

const SectionServices = () => {
  const t = getT();
  const [ opSel, setOpSel ] = useState<ServiceOpt>(servMenu[0]);
  const isTablet = useMediaTablet();
  const isWeb = useMediaWeb();
  const handleClick = (id: string) => {
    setOpSel(servMenu.find((op) => op.id === id) as ServiceOpt);
  };
  return (
    <div className={styles.cont}>
      <Title
        title={t('servicesSec.title')}
        subTitle={t('servicesSec.sub')}
      />
      <div className={styles.body}>
        <div className={styles.menu}>
          <SelectorCapsule
            options={servMenu}
            onClick={handleClick}
          />
        </div>
        {isWeb &&
          <div className={styles.picWrap}>
            <img src={`/services/${opSel.pic}`} />
          </div>}
        {(isWeb || isTablet) &&
          <div className={styles.info}>
            <InfoService
              title={t(`services.${opSel.id}.title`)}
              desc={t(`services.${opSel.id}.desc`)}
              onClick={() => console.log(opSel.id)}
            />
          </div>}
      </div>
    </div>
  );
};

export default SectionServices;
