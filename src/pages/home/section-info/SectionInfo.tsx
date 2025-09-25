import type { Variants } from 'motion/react';

import { CardInfo } from '@components/card';
import { Button } from '@components/form';
import { Desc } from '@components/text';
import { InfoMenu, OpeningInfoOpt } from '@globals/info';
import { useMediaMobile } from '@hooks/useMedia';
import useSaveRefSection from '@hooks/useSaveRefSection';
import i18n from '@i18n/index';
import { MenuOption, Sections } from '@models/app';
import { motion as m, stagger } from 'motion/react';
import { useRef } from 'react';

import styles from './style.module.less';

const CardInfoTime = () => {
  const { t } = i18n;
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
  const { t } = i18n;
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

const varFather: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(0.5, { startDelay: 0.3 }) }
  }
};

const varChild: Variants = {
  hidden: { opacity: 0, translateX: -50 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' }, translateX: 0 }
};

const SectionInfoMobile = () => {
  return (
    <m.ul
      animate="show"
      className={styles.galMobile}
      initial="hidden"
      variants={varFather}
    >
      {InfoMenu.map((s: MenuOption) => (
        <m.li
          key={s.id}
          variants={varChild}
        >
          <CardInfoEle
            icon={s.icon}
            id={s.id}
            path={s.path}
          />
        </m.li>
      ))}
      <m.li
        key="time"
        variants={varChild}
      >
        <CardInfoTime />
      </m.li>
    </m.ul>
  );
};

const SectionInfoWeb = () => {
  return (
    <m.ul
      className={styles.galWeb}
      initial="hidden"
      variants={varFather}
      viewport={{ amount: 'some', once: true }}
      whileInView="show"
    >
      <m.li
        key="time"
        variants={varChild}
      >
        <CardInfoTime />
      </m.li>
      {InfoMenu.map((s: MenuOption) => (
        <m.li
          key={s.id}
          variants={varChild}
        >
          <CardInfoEle
            icon={s.icon}
            id={s.id}
            path={s.path}
          />
        </m.li>
      ))}
    </m.ul>
  );
};

const SectionInfo = () => {
  const isMobile = useMediaMobile();
  const ref = useRef<HTMLDivElement>(null);
  useSaveRefSection(ref, Sections.INFO);

  return (
    <div className={styles.cont} ref={ref}>
      {isMobile
        ? <SectionInfoMobile />
        : <SectionInfoWeb />}
    </div>
  );
};

export default SectionInfo;
