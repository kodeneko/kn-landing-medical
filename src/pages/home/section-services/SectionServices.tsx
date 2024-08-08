import { Title } from '@components/text';
import { t } from '@i18n/index';

import styles from './style.module.less';

const SectionServices = () => {
  return (
    <div className={styles.cont}>
      <Title
        title={t('servicesSec.title')}
        subTitle={t('servicesSec.sub')}
      />
    </div>
  );
};

export default SectionServices;
