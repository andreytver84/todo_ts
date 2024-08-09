import { Button } from "@mui/material";
import Card from "./Card";
import styles from "./Filter.module.css";
import { useTodos } from "../store/useTodos";
import { useColorTheme } from "../store/useColorTheme";

const Filter = () => {
  const hideNotQuickly = useTodos((state) => state.hideNotQuickly);
  const onToggleTheme = useColorTheme((state) => state.onToggleTheme);

  const quicklyTaskHandler = () => {
    //console.log("11");
    hideNotQuickly();
  };
  return (
    <Card>
      <div className={styles.wrap}>
        <Button variant="outlined" onClick={quicklyTaskHandler}>
          Toggle quickly tasks
        </Button>
        <Button variant="outlined" onClick={() => onToggleTheme()}>
          Change Theme
        </Button>
      </div>
    </Card>
  );
};

export default Filter;
