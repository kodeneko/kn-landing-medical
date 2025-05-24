import { CardDoctor } from '@components/card';
import { Button } from '@components/form';
import { Title } from '@components/text';
import { doctors } from '@globals/doctors';
import { getT } from '@i18n/index';
import { SizeType } from '@models/app';

import styles from './style.module.less';

const SectionContact = () => {
  const t = getT();
  return (
    <div className={styles.cont}>
      <Title
        subTitle={t('doctorsSec.sub')}
        title={t('doctorsSec.title')}
      />
      <div className={styles.body}>
        <ul className={styles.gallery}>
          {doctors.map(d => (
            <li key={d.specialist}>
              <CardDoctor
                name={d.name}
                pic={`/doctors/${d.pic}`}
                specialist={t(`specialists.${d.specialist}`)}
              />
            </li>
          ))}
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
