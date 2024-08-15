import { CardPricing } from '@components/card';
import { Title } from '@components/text';
import { priceList } from '@globals/pricing';
import { t } from '@i18n/index';
import { Price } from '@models/Price';
import { useState } from 'react';

import styles from './style.module.less';

const SectionPricing = () => {
  const [ pricing, setPricing ] = useState<Price>(priceList[1]);
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <Title
          title={t('pricingSec.title')}
          subTitle={t('pricingSec.sub')}
        />
      </div>
      <div className={styles.body}>
        <ul className={styles.gallery}>
          {priceList.map((p) => <li
            key={p.id}
            className={styles.ele}
            onClick={() => setPricing(p)}
            onMouseOver={() => setPricing(p)}
          >
            <CardPricing
              grad={pricing.id === p.id}
              icon={p.icon}
              title={t(`pricing.${p.id}.title`)}
              price={p.price}
              symbol={t('symbol')}
              period={t(`period.${p.period}`)}
              specs={p.spec.map((s) => <span
                className={s.included
                  ? styles.not
                  : styles.line}
                key={s.id}>
                {t(`specs.${s.id}`)}
              </span>)}
            />
          </li>)}
        </ul>
      </div>
    </div>
  );
};

export default SectionPricing;
