import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";
import styles from "./List.module.css";

const List = () => {
  const onlyQuicklyTasks = useTodos((state) => state.onlyQuicklyTasks);
  const tasks = useTodos((state) => state.todos); // change name
  const todoData = onlyQuicklyTasks
    ? tasks.filter((item) => item.quickly)
    : tasks;

  return (
    <Card>
      <ul className={styles.list}>
        {todoData.map((item) => (
          <li key={item.id}>
            <ItemList
              title={item.title}
              id={item.id}
              quickly={item.quickly}
              date={item.date}
              complite={item.competed}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default List;
