import Button from "./Button";
import Card from "./Card";
import styles from "./Bar.module.css";

const Bar = () => {
  return (
    <Card>
      <div className={styles.bar}>
        <Button className="default">Add task</Button>
        <Button className="secondary">Hide tasks</Button>
      </div>
    </Card>
  );
};

export default Bar;
