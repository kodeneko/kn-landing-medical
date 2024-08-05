import styles from './style.module.less';
import FieldProps from './type';

const Field = ({
  label,
  value,
  hint,
  placeH,
  onChange,
  onBlur
}: FieldProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.label}>{ label }</div>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeH}
      />
      <div className={styles.hint}>{ hint }</div>
    </div>
  );
};

export default Field;
