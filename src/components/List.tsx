import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";
import styles from "./List.module.css";

const List = () => {
  const todoData = useTodos((state) => state.todos);

  return (
    <Card>
      <ul className={styles.list}>
        {todoData.map((item) => (
          <li key={item.id}>
            <ItemList title={item.title} id={item.id} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
