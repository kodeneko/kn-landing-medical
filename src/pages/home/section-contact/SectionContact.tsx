import { ContactForm } from '@components/contact-form';
import { ContactFormModel } from '@components/contact-form/models';
import sendNoti from '@components/notification/useNoti';
import { Title } from '@components/text';
import { getT } from '@i18n/index';

import styles from './style.module.less';

const SectionContact = () => {
  const t = getT();

  const handleForm = (contact: ContactFormModel) => {
    console.log(contact);
    sendNoti({ msg: '😃 Message sended' });
  };

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
            onChange={handleForm}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
