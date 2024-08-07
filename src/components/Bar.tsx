//import Button from "./Button";
import Card from "./Card";
import styles from "./Bar.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SimpleDialog from "./SimpleDialog";
import { useState } from "react";
import { useTodos } from "../store/useTodos";
import { useColorTheme } from "../store/useColorTheme";

const Bar = () => {
  const [open, setOpen] = useState(false);

  const hideNotQuickly = useTodos((state) => state.hideNotQuickly);
  const onToggleTheme = useColorTheme((state) => state.onToggleTheme);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const quicklyTaskHandler = () => {
    //console.log("11");
    hideNotQuickly();
  };

  return (
    <Card>
      <div className={styles.bar}>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          endIcon={<SendIcon />}
        >
          Add task
        </Button>
        <Button variant="outlined" onClick={quicklyTaskHandler}>
          Toggle quickly tasks
        </Button>
        <Button variant="outlined" onClick={() => onToggleTheme()}>
          Change Theme
        </Button>
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
};

export default Bar;
