import { CardDoctor } from '@components/card';
import { Button } from '@components/form';
import { Title } from '@components/text';
import { doctors } from '@globals/doctors';
import { t } from '@i18n/index';
import { SizeType } from '@models/app';

import styles from './style.module.less';

const SectionContact = () => {
  return (
    <div className={styles.cont}>
      <Title
        title={t('doctorsSec.title')}
        subTitle={t('doctorsSec.sub')}
      />
      <div className={styles.body}>
        <ul className={styles.gallery}>
          {doctors.map((d) => <li key={d.specialist}>
            <CardDoctor
              pic={`/doctors/${d.pic}`}
              name={d.name}
              surname={d.specialist}
            />
          </li>)}
        </ul>
      </div>
      <div className={styles.footer}>
        <Button size={SizeType.LG}>
          {t('labels.viewMore')}
        </Button>
      </div>
    </div>
  );
};

export default SectionContact;
