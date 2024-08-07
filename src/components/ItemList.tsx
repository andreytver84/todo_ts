import { useTodos } from "../store/useTodos";
import { PropsItem } from "./interfaces_types";
import styles from "./ItemList.module.css";

const ItemList = (props: PropsItem) => {
  const removeTodo = useTodos((state) => state.removeTodo);

  return (
    <div className={styles.item}>
      <p>{props.title}</p>
      <span className={styles.btnRemove} onClick={() => removeTodo(props.id)}>
        X
      </span>
    </div>
  );
};

export default ItemList;
