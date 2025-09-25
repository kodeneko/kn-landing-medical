import { Button, Field } from '@components/form';
import { useMediaMobile } from '@hooks/useMedia';
import i18n from '@i18n/index';
import { SizeType } from '@models/app';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ContactFormModel, ContactFormProps, contactSchema } from './models';
import styles from './style.module.less';

const contactInit: ContactFormModel = {
  mail: ''
};

const ContactForm = ({
  onChange
}: ContactFormProps) => {
  const { t } = i18n;
  const isMobile = useMediaMobile();
  const formik = useFormik<ContactFormModel>({
    initialValues: contactInit,
    onSubmit: onChange,
    validationSchema: toFormikValidationSchema(contactSchema)
  });
  return (
    <div className={styles.cont}>
      <form onSubmit={e => {
        e.preventDefault();
        formik.handleSubmit();
      }}
      >
        <Field
          hint={formik.touched.mail ? formik.errors.mail : ''}
          id="mail"
          label={t('labels.mail')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeH={t('placeH.mail')}
          value={formik.values.mail}
        />
        <Button
          fullWide={isMobile}
          secondary={true}
          size={SizeType.LG}
        >
          {t('labels.sendMail') }
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
