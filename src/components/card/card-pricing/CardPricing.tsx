import { BadgeIcon } from '@components/badge-icon';
import { Button } from '@components/form';
import { List } from '@components/text';
import { getT } from '@i18n/index';
import { FormType } from '@models/app';
import clsx from 'clsx';

import styles from './style.module.less';
import CardPricingProps from './type';

const CardPricing = ({
  grad = false,
  icon,
  onClick,
  period,
  price,
  specs,
  symbol,
  title
}: CardPricingProps) => {
  const t = getT();
  const stylePricing = clsx(
    styles.pricing,
    styles[grad ? 'grad' : 'shadow']
  );
  return (
    <div className={stylePricing}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <BadgeIcon
            icon={icon}
            invert={grad}
            shape={FormType.CIRCLE}
          />
        </div>
        <div className={styles.title}>{ title }</div>
      </header>
      <div className={styles.body}>
        <div className={styles.priceInfo}>
          <div className={styles.price}>
            <span className={styles.qty}>{price}</span>
            <span className={styles.symbol}>{symbol}</span>
          </div>
          <div className={styles.period}>
            <span>/</span>
            <span>{period}</span>
          </div>
        </div>
        <div className={styles.specs}>
          <List inverse={grad} list={specs} />
        </div>
      </div>
      <footer className={styles.footer}>
        <Button
          fullWide={true}
          onClick={onClick}
          secondary={grad}
        >
          { t('labels.hire')}
        </Button>
      </footer>
    </div>
  );
};

export default CardPricing;
