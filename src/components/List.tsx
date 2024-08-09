import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";
import styles from "./List.module.css";
import { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SimpleDialog from "./SimpleDialog";

const List = () => {
  const onlyQuicklyTasks = useTodos((state) => state.onlyQuicklyTasks);
  const tasks = useTodos((state) => state.todos);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const todoData = onlyQuicklyTasks
    ? tasks.filter((item) => item.quickly)
    : tasks;

  return (
    <Card>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        endIcon={<SendIcon />}
      >
        Add task
      </Button>

      <p></p>
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
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
};

export default List;
