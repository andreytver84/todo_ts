//import Button from "./Button";
import Card from "./Card";
import styles from "./Bar.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import SimpleDialog from "./SimpleDialog";
import { useState } from "react";

const Bar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <Button variant="outlined">Hide tasks</Button>
      </div>
      <SimpleDialog open={open} onClose={handleClose} />
    </Card>
  );
};

export default Bar;
