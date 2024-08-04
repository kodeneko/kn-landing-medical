import { ButtonIcon } from '@components/btn-icon';
import { t } from '@i18n/index';
import { BtnType, FormType, SizeType } from '@models/app';

import styles from './style.module.less';
import SelectorCapsuleProps from './type';

const SelectorCapsule = ({ options, onClick }: SelectorCapsuleProps) => {
  return (
    <ul className={styles.menu}>
      {options.map((opt) => <li
        className={styles.opt}
        key={opt.id}
        onClick={() => onClick(opt.id)}
      >
        <div className={styles.icon}>
          <ButtonIcon
            shape={FormType.CIRCLE}
            type={BtnType.BTN}
            size={SizeType.LG}
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
