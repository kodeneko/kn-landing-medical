import styles from './style.module.less';
import DescProps from './type';

const Desc = ({ content, title }: DescProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default Desc;
