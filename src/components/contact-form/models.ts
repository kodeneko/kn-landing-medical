import { t } from 'i18next';
import { z } from 'zod';

export const contactSchema = z.object({ mail: z.string().email(t('msg.errorMail')) });

export type ContactFormModel = z.infer<typeof contactSchema>;

export type ContactFormProps = {
  onChange: (contact: ContactFormModel) => void
};
