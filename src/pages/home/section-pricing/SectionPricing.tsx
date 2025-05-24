import { CardPricing } from '@components/card';
import { Title } from '@components/text';
import { priceList } from '@globals/pricing';
import { getT } from '@i18n/index';
import { Price } from '@models/Price';
import { useState } from 'react';

import styles from './style.module.less';

const SectionPricing = () => {
  const t = getT();
  const [pricing, setPricing] = useState<Price>(priceList[1]);
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <Title
          subTitle={t('pricingSec.sub')}
          title={t('pricingSec.title')}
        />
      </div>
      <div className={styles.body}>
        <ul className={styles.gallery}>
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
        </ul>
      </div>
    </div>
  );
};

export default SectionPricing;
