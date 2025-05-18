import { Button, Field } from '@components/form';
import { useMediaMobile } from '@hooks/useMedia';
import { getT } from '@i18n/index';
import { SizeType } from '@models/app';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import styles from './style.module.less';
import ContactFormProps from './type';

const ContactForm = ({ onChange,
  val }: ContactFormProps) => {
  const t = getT();
  const isMobile = useMediaMobile();
  const schema = z.object({ mail: z.string().email(t('msg.errorMail')) });
  const formik = useFormik({ initialValues: { mail: val },
    onSubmit: vals => {
      onChange(vals.mail);
    },
    validationSchema: toFormikValidationSchema(schema) });
  return (
    <div className={styles.cont}>
      <form>
        <Field
          hint={formik.touched.mail && formik.errors.mail}
          id="mail"
          label={t('labels.mail')}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeH={t('placeH.mail')}
          value={formik.values.mail}
        />
        <Button
          fullWide={isMobile}
          onClick={() => formik.submitForm()}
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
