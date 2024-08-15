import { BadgeIcon } from '@components/badge-icon';
import useMedia from '@hooks/useMedia';
import { t } from '@i18n/index';
import { FormType, SizeType } from '@models/app';

import styles from './style.module.less';
import SelectorCapsuleProps from './type';

const SelectorCapsule = ({ options, onClick }: SelectorCapsuleProps) => {
  const swMedia = useMedia();
  console.log(swMedia);
  return (
    <ul className={styles.menu}>
      {options.map((opt) => <li
        className={styles.opt}
        key={opt.id}
        onClick={() => onClick(opt.id)}
      >
        <div className={styles.icon}>
          <BadgeIcon
            shape={FormType.CIRCLE}
            size={swMedia
              ? SizeType.MD
              : SizeType.LG}
            icon={opt.icon as string}
          />
        </div>
        <div className={styles.label}>
          {t(`labels.${opt.id}`)}
        </div>
      </li>)}
    </ul>
  );
};

export default SelectorCapsule;
