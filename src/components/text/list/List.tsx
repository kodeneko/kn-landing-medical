import styles from './style.module.less';
import ListProps from './type';

const List = ({ list = [] }: ListProps) => {
  return (
    <ul className={styles.list}>
      {list.map((ele, i) => <li className={styles.ele} key={i}>
        <div className={styles.dot} />
        <div className={styles.txt} >{ele}</div>
      </li>)}
    </ul>
  );
};

export default List;
