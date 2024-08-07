import { useTodos } from "../store/useTodos";
import { PropsItem } from "./interfaces_types";
import styles from "./ItemList.module.css";

const ItemList = (props: PropsItem) => {
  const removeTodo = useTodos((state) => state.removeTodo);

  return (
    <div className={styles.item}>
      {props.quickly && <span className={styles.label}>quickly</span>}
      <div className={styles.task}>
        <h4>{props.title}</h4>
        <span className={styles.date}>{props.date}</span>
      </div>

      <span className={styles.btnRemove} onClick={() => removeTodo(props.id)}>
        X
      </span>
    </div>
  );
};

export default ItemList;
