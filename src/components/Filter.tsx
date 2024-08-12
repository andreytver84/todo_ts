import { Button } from "@mui/material";
import Card from "./Card";
import styles from "./Filter.module.css";
import { useTodos } from "../store/useTodos";
import { useColorTheme } from "../store/useColorTheme";
import clsx from "clsx";
import BasicDatePicker from "./BasicDatePicker";

const Filter = () => {
  const quicklyToggle = useTodos((state) => state.quicklyToggle);
  const onlyQuicklyTasks = useTodos((state) => state.onlyQuicklyTasks);

  const onToggleTheme = useColorTheme((state) => state.onToggleTheme);

  const quicklyTaskHandler = () => {
    quicklyToggle(!onlyQuicklyTasks);
  };
  return (
    <Card>
      <div className={styles.wrap}>
        <BasicDatePicker />
        <div className={styles.wrapTodayToggle}>
          <p>Toggle quickly tasks</p>
          <div
            onClick={quicklyTaskHandler}
            className={clsx(styles["switch-btn"], {
              [styles["switch-on"]]: onlyQuicklyTasks,
            })}
          ></div>
        </div>

        <Button variant="outlined" onClick={() => onToggleTheme()}>
          Change Theme
        </Button>
      </div>
    </Card>
  );
};

export default Filter;
