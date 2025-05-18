import { ContactForm } from '@components/contact-form';
import { Title } from '@components/text';
import { getT } from '@i18n/index';
import { useState } from 'react';

import styles from './style.module.less';

const SectionContact = () => {
  const t = getT();
  const [mail, setMail] = useState<string>('');
  return (
    <div className={styles.cont}>
      <div className={styles.header}>
        <Title
          subTitle={t('contactSec.sub')}
          title={t('contactSec.title')}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.wrap}>
          <ContactForm
            onChange={val => setMail(val)}
            val={mail}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
