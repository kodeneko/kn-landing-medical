import clsx from 'clsx';

import styles from './style.module.less';
import ListProps from './type';

const List = ({ list = [], inverse = false }: ListProps) => {
  const styleList = clsx(styles.list, styles[inverse
    ? 'inv'
    : 'reg']);
  return (
    <ul className={styleList}>
      {list.map((ele, i) => <li className={styles.ele} key={i}>
        <div className={styles.dot} />
        <div className={styles.txt} >{ele}</div>
      </li>)}
    </ul>
  );
};

export default List;
