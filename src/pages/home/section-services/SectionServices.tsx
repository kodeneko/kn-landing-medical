import { Button } from '@components/form';
import { SelectorCapsule } from '@components/selector-capsule';
import { Title } from '@components/text';
import { servMenu } from '@globals/services';
import { useMediaTablet, useMediaWeb } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { ServiceOpt } from '@models/app';
import { motion as m } from 'motion/react';
import React, { useState } from 'react';

import styles from './style.module.less';
import { InfoServiceProps } from './types';

const InfoService: React.FC<InfoServiceProps> = ({ desc, onClick, title }) => {
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
      <m.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ amount: 'some', once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Title
          subTitle={t('servicesSec.sub')}
          title={t('servicesSec.title')}
        />
      </m.div>
      <div className={styles.body}>
        <m.div
          className={styles.menu}
          initial={{ opacity: 0, translateX: -100 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ amount: 'some', once: true }}
          whileInView={{ opacity: 1, translateX: 0 }}
        >
          <SelectorCapsule
            onClick={handleClick}
            options={servMenu}
          />
        </m.div>
        {isWeb
          && (
            <m.div
              className={styles.picWrap}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ amount: 'some', once: true }}
              whileInView={{ opacity: 1 }}
            >
              <img src={`/services/${opSel.pic}`} />
            </m.div>
          )}
        {(isWeb || isTablet)
          && (
            <m.div
              className={styles.info}
              initial={{ opacity: 0, translateX: 100 }}
              transition={{ delay: 0.3, duration: 1 }}
              viewport={{ amount: 'some', once: true }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <InfoService
                desc={t(`services.${opSel.id}.desc`)}
                onClick={() => console.log(opSel.id)}
                title={t(`services.${opSel.id}.title`)}
              />
            </m.div>
          )}
      </div>
    </div>
  );
};

export default SectionServices;
