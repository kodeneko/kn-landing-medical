import { BadgeIcon } from '@components/badge-icon';
import { useMediaTablet } from '@hooks/useMedia';
import i18n from '@i18n/index';
import { FormType, SizeType } from '@models/app';

import styles from './style.module.less';
import SelectorCapsuleProps from './type';

const SelectorCapsule = ({ onClick, options }: SelectorCapsuleProps) => {
  const { t } = i18n;
  const swMedia = useMediaTablet();
  return (
    <ul className={styles.menu}>
      {options.map(opt => (
        <li
          className={styles.opt}
          key={opt.id}
          onClick={() => onClick(opt.id)}
        >
          <div className={styles.icon}>
            <BadgeIcon
              icon={opt.icon as string}
              shape={FormType.CIRCLE}
              size={swMedia
                ? SizeType.MD
                : SizeType.LG}
            />
          </div>
          <div className={styles.label}>
            {t(`labels.${opt.id}`)}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SelectorCapsule;
