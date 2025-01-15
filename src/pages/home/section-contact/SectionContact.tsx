import { ContactForm } from '@components/contact-form';
import { Title } from '@components/text';
import { getT } from '@i18n/index';
import { useState } from 'react';

import styles from './style.module.less';

const SectionContact = () => {
  const t = getT();
  const [ mail, setMail ] = useState<string>('');
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <Title
          title={t('contactSec.title')}
          subTitle={t('contactSec.sub')}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.wrap}>
          <ContactForm
            val={mail}
            onChange={(val) => setMail(val)}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
