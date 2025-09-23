import type { Variants } from 'motion/react';

import { CardDoctor } from '@components/card';
import { Button } from '@components/form';
import { Title } from '@components/text';
import { doctors } from '@globals/doctors';
import { getT } from '@i18n/index';
import { SizeType } from '@models/app';
import { motion as m, stagger } from 'motion/react';

import styles from './style.module.less';

const varFather: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: stagger(0.5, { startDelay: 0.5 }) }
  }
};

const varChild: Variants = {
  hidden: { opacity: 0, translateX: -50 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' }, translateX: 0 }
};

const SectionContact = () => {
  const t = getT();
  return (
    <div className={styles.cont}>
      <m.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ amount: 'some', once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Title
          subTitle={t('doctorsSec.sub')}
          title={t('doctorsSec.title')}
        />
      </m.div>
      <div className={styles.body}>
        <m.ul
          className={styles.gallery}
          initial="hidden"
          variants={varFather}
          viewport={{ amount: 'some', once: true }}
          whileInView="show"
        >
          {doctors.map(d => (
            <m.li
              key={d.specialist}
              variants={varChild}
            >
              <CardDoctor
                name={d.name}
                pic={`/doctors/${d.pic}`}
                specialist={t(`specialists.${d.specialist}`)}
              />
            </m.li>
          ))}
        </m.ul>
      </div>
      <m.div
        className={styles.footer}
        initial={{ opacity: 0, scale: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ amount: 'some', once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        <Button size={SizeType.LG}>
          {t('labels.viewMore')}
        </Button>
      </m.div>
    </div>
  );
};

export default SectionContact;
