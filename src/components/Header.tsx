import { format } from "date-fns";
import styles from "./Header.module.css";

const Header = () => {
  const date = format(new Date(), "'Today is a' eeee");

  return (
    <header>
      <h1>ToDo List</h1>
      <p className={styles.date}>{date}</p>
    </header>
  );
};

export default Header;
