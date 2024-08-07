//import Button from "./Button";
import Card from "./Card";
import styles from "./Bar.module.css";
import { useTodos } from "../store/useTodos";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SimpleDialog from "./SimpleDialog";
import { useState } from "react";

const Bar = () => {
  const [open, setOpen] = useState(false);

  const addTodo = useTodos((state) => state.addTodo);
  const addHandler = () => {
    const task = prompt();
    if (task) {
      addTodo(task);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <div className={styles.bar}>
        <Button variant="contained" onClick={addHandler} endIcon={<SendIcon />}>
          Add task
        </Button>
        <Button variant="outlined" onClick={handleClickOpen}>
          Hide tasks
        </Button>
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
};

export default Bar;
