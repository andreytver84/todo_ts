import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";
import styles from "./List.module.css";
import { useState } from "react";

const List = () => {
  const onlyQuicklyTasks = useTodos((state) => state.onlyQuicklyTasks);
  const tasks = useTodos((state) => state.todos);
  const todayTaskToggle = useTodos((state) => state.todayTaskToggle);
  const [isClicked, setIsClicked] = useState(false);

  const todayClickHandler = () => {
    setIsClicked(!isClicked);
  };

  const todoData = onlyQuicklyTasks
    ? tasks.filter((item) => item.quickly)
    : tasks;

  const tasksData = !isClicked ? todoData : todayTaskToggle(isClicked);

  return (
    <Card>
      <button onClick={todayClickHandler}>
        {!isClicked ? "Show only today tasks" : "Show all tasks"}
      </button>
      <p></p>
      <ul className={styles.list}>
        {tasksData.map((item) => (
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
