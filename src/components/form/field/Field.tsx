import styles from './style.module.less';
import FieldProps from './type';

const Field = ({
  hint,
  id,
  label,
  onBlur,
  onChange,
  placeH,
  value
}: FieldProps) => {
  return (
    <div className={styles.cont}>
      <div className={styles.label}>{ label }</div>
      <input
        className={styles.input}
        id={id}
        name={id}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeH}
        type="text"
        value={value}
      />
      <div className={styles.hint}>{ hint }</div>
    </div>
  );
};

export default Field;
