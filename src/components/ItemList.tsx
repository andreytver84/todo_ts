import clsx from "clsx";
import { useTodos } from "../store/useTodos";
import { PropsItem } from "./interfaces_types";
import styles from "./ItemList.module.css";
import { Link } from "react-router-dom";

const ItemList = (props: PropsItem) => {
  const removeTodo = useTodos((state) => state.removeTodo);
  const compliteTodo = useTodos((state) => state.compliteTodo);

  return (
    <div className={clsx(props.complite ? styles.itemComplete : styles.item)}>
      {props.quickly && <span className={styles.label}>quickly</span>}
      <div className={styles.task}>
        <h4>{props.title}</h4>
        <span className={styles.date}>{props.date}</span>
      </div>
      <Link to={"task/" + props.id}>Read more</Link>

      <div className={styles.btnWraper}>
        <span
          className={styles.btnComplite}
          onClick={() => compliteTodo(props.id)}
        >
          V
        </span>
        <span className={styles.btnRemove} onClick={() => removeTodo(props.id)}>
          X
        </span>
      </div>
    </div>
  );
};

export default ItemList;
