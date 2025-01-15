import styles from './style.module.less';
import { OverlayProps } from './type';

const Overlay = ({ isVisible }: OverlayProps) => {
  return (
    isVisible && <div className={styles.overlay} />
  );
};

export default Overlay;
