import { Button } from '@components/form';
import { SelectorCapsule } from '@components/selector-capsule';
import { Title } from '@components/text';
import { servMenu } from '@globals/services';
import { useMediaTablet, useMediaWeb } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { ServiceOpt } from '@models/app';
import { useState } from 'react';

import styles from './style.module.less';

const InfoService = ({ desc, onClick, title }) => {
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
  const [opSel, setOpSel] = useState<ServiceOpt>(servMenu[0]);
  const isTablet = useMediaTablet();
  const isWeb = useMediaWeb();
  const handleClick = (id: string) => {
    setOpSel(servMenu.find(op => op.id === id) as ServiceOpt);
  };
  return (
    <div className={styles.cont}>
      <Title
        subTitle={t('servicesSec.sub')}
        title={t('servicesSec.title')}
      />
      <div className={styles.body}>
        <div className={styles.menu}>
          <SelectorCapsule
            onClick={handleClick}
            options={servMenu}
          />
        </div>
        {isWeb
          && (
            <div className={styles.picWrap}>
              <img src={`/services/${opSel.pic}`} />
            </div>
          )}
        {(isWeb || isTablet)
          && (
            <div className={styles.info}>
              <InfoService
                desc={t(`services.${opSel.id}.desc`)}
                onClick={() => console.log(opSel.id)}
                title={t(`services.${opSel.id}.title`)}
              />
            </div>
          )}
      </div>
    </div>
  );
};

export default SectionServices;
