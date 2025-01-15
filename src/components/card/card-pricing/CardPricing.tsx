import { BadgeIcon } from '@components/badge-icon';
import { Button } from '@components/form';
import { List } from '@components/text';
import { getT } from '@i18n/index';
import { FormType } from '@models/app';
import clsx from 'clsx';

import styles from './style.module.less';
import CasdPricingProps from './type';

const CasdPricing = ({
  grad = false,
  icon,
  title,
  price,
  symbol,
  period,
  specs,
  onClick
}: CasdPricingProps) => {
  const t = getT();
  const stylePricing = clsx(styles.pricing, styles[grad
    ? 'grad'
    : 'shadow']);
  return (
    <div className={stylePricing}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <BadgeIcon icon={icon} shape={FormType.CIRCLE}
            invert={grad} />
        </div>
        <div className={styles.title}>{ title }</div>
      </header>
      <div className={styles.body}>
        <div className={styles.priceInfo}>
          <div className={styles.price}>
            <span className={styles.qty}>{ price}</span>
            <span className={styles.symbol}>{ symbol}</span>
          </div>
          <div className={styles.period}>
            <span>/</span>
            <span>{period}</span>
          </div>
        </div>
        <div className={styles.specs}>
          <List list={specs} inverse={grad} />
        </div>
      </div>
      <footer className={styles.footer}>
        <Button onClick={onClick} fullWide={true}
          secondary={grad}>{ t('labels.hire')}
        </Button>
      </footer>
    </div>
  );
};

export default CasdPricing;
