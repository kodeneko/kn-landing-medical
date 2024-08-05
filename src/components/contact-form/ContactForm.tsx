import { Button, Field } from '@components/form';
import useMedia from '@hooks/useMedia';
import { t } from '@i18n/index';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import styles from './style.module.less';
import ContactFormProps from './type';

const ContactForm = ({
  val,
  onChange
}: ContactFormProps) => {
  const isMobile = useMedia();
  const schema = z.object({ mail: z.string().email(t('msg.errorMail')) });
  const formik = useFormik({
    initialValues: { mail: val },
    onSubmit: (vals) => {
      console.log(vals);
      onChange(vals.mail);
    },
    validationSchema: toFormikValidationSchema(schema)
  });
  return (
    <div className={styles.cont}>
      <form>
        <Field
          label={t('labels.mail')}
          value={formik.values.mail}
          hint={formik.errors.mail}
          placeH={t('placeH.mail')}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button fullWide={isMobile} secondary={true}
          onClick={() => formik.submitForm()}>{t('labels.sendMail') }
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
