import Card from "./Card";
import ItemList from "./ItemList";
import { useTodos } from "../store/useTodos";
import styles from "./List.module.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SimpleDialog from "./SimpleDialog";

const List = () => {
  const tasks = useTodos((state) => state.todos);
  const loading = useTodos((state) => state.loading);
  const fetchTodos = useTodos((state) => state.fetchTodos);
  const onlyQuicklyTasks = useTodos((state) => state.onlyQuicklyTasks);
  const onlyThisDay = useTodos((state) => state.onlyThisDay);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = tasks
    .filter((task) => {
      const onlyDaYMonth = task.date.slice(0, 5);
      return onlyDaYMonth === onlyThisDay;
    })
    .filter((task) => {
      if (onlyQuicklyTasks) {
        return task.quickly === onlyQuicklyTasks;
      } else {
        return task;
      }
    });

  useEffect(() => {
    fetchTodos();
  }, []);

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
      {loading && `Loading...`}
      <ul className={styles.list}>
        {data.map((item) => (
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
