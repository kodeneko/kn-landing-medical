import styles from './style.module.less';
import TitleProps from './type';

const Title = ({ subTitle, title }: TitleProps) => {
  return (
    <>
      <h2 className={styles.title}>{ title}</h2>
      {subTitle && <p className={styles.subtitle}>{ subTitle }</p>}
    </>
  );
};

export default Title;
