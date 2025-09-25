import { ContactForm } from '@components/contact-form';
import { ContactFormModel } from '@components/contact-form/models';
import sendNoti from '@components/notification/useNoti';
import { Title } from '@components/text';
import useSaveRefSection from '@hooks/useSaveRefSection';
import i18n from '@i18n/index';
import { Sections } from '@models/app';
import { motion as m } from 'motion/react';
import { useRef } from 'react';

import styles from './style.module.less';

const SectionContact = () => {
  const { t } = i18n;
  const ref = useRef<HTMLDivElement>(null);
  useSaveRefSection(ref, Sections.CONTACT);

  const handleForm = (contact: ContactFormModel) => {
    console.log(contact);
    sendNoti({ msg: '😃 Message sended' });
  };

  return (
    <div className={styles.cont} ref={ref}>
      <m.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ amount: 'some', once: true }}
        whileInView={{ opacity: 1 }}
      >
        <Title
          subTitle={t('contactSec.sub')}
          title={t('contactSec.title')}
        />
      </m.div>
      <div className={styles.body}>
        <m.div
          className={styles.wrap}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ amount: 'some', once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <ContactForm
            onChange={handleForm}
          />
        </m.div>
      </div>
    </div>
  );
};

export default SectionContact;
