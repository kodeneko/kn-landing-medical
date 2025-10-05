import styles from './style.module.less';
import CardDoctorProps from './type';

const CardDoctor = ({ name, pic, specialist }: CardDoctorProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.picWrap}>
        <img className={styles.pic} src={pic} />
      </div>
      <div className={styles.desc}>
        <div className={styles.name}>{name}</div>
        <div className={styles.surname}>{specialist}</div>
      </div>
    </div>
  );
};

export default CardDoctor;
