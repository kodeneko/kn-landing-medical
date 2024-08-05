import styles from './style.module.less';
import TitleProps from './type';

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className={styles.cont}>
      <h2 className={styles.title}>{ title}</h2>
      {subTitle && <p className={styles.subtitle}>{ subTitle }</p>}
    </div>
  );
};

export default Title;
