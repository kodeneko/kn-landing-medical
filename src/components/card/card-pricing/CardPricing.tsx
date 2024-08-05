import { ButtonIcon } from '@components/btn-icon';
import { Button } from '@components/form';
import { List } from '@components/text';
import { t } from '@i18n/index';
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
  const stylePricing = clsx(styles.pricing, styles[grad
    ? 'grad'
    : 'shadow']);
  return (
    <div className={stylePricing}>
      <header className={styles.header}>
        <div className={styles.icon}>
          <ButtonIcon icon={icon} shape={FormType.CIRCLE} />
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
          <List list={specs} />
        </div>
      </div>
      <footer className={styles.footer}>
        <Button onClick={onClick}>{ t('labels.hire')}</Button>
      </footer>
    </div>
  );
};

export default CasdPricing;
