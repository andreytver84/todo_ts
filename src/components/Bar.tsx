import Button from "./Button";
import Card from "./Card";
import styles from "./Bar.module.css";
import { useTodos } from "../store/useTodos";

const Bar = () => {
  const addTodo = useTodos((state) => state.addTodo);
  const addHandler = () => {
    addTodo(prompt());
  };
  return (
    <Card>
      <div className={styles.bar}>
        <Button onClick={addHandler} className="default">
          Add task
        </Button>
        <Button className="secondary">Hide tasks</Button>
      </div>
    </Card>
  );
};

export default Bar;
