import { CardPricing } from '@components/card';
import { Title } from '@components/text';
import { priceList } from '@globals/pricing';
import useSaveRefSection from '@hooks/useSaveRefSection';
import { getT } from '@i18n/index';
import { Sections } from '@models/app';
import { Price } from '@models/Price';
import { motion as m } from 'motion/react';
import { useRef, useState } from 'react';

import styles from './style.module.less';

const SectionPricing = () => {
  const t = getT();
  const [pricing, setPricing] = useState<Price>(priceList[1]);
  const ref = useRef<HTMLDivElement>(null);
  useSaveRefSection(ref, Sections.PRICING);

  return (
    <div className={styles.cont} ref={ref}>
      <m.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ amount: 'some', once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Title
          subTitle={t('pricingSec.sub')}
          title={t('pricingSec.title')}
        />
      </m.div>
      <div className={styles.body}>
        <m.ul
          className={styles.gallery}
          initial={{ opacity: 0, translateY: 100 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ amount: 'some', once: true }}
          whileInView={{ opacity: 1, translateY: 0 }}
        >
          {priceList.map(p => (
            <li
              className={styles.ele}
              key={p.id}
              onClick={() => setPricing(p)}
              onMouseOver={() => setPricing(p)}
            >
              <CardPricing
                grad={pricing.id === p.id}
                icon={p.icon}
                period={t(`period.${p.period}`)}
                price={p.price}
                specs={p.spec.map(s => (
                  <span
                    className={s.included ? styles.not : styles.line}
                    key={s.id}
                  >
                    {t(`pricing.specs.${s.id}`)}
                  </span>
                ))}
                symbol={t('symbol')}
                title={t(`pricing.${p.id}.title`)}
              />
            </li>
          ))}
        </m.ul>
      </div>
    </div>
  );
};

export default SectionPricing;
