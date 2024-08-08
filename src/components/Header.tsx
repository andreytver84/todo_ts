import { format } from "date-fns";
import styles from "./Header.module.css";

const Header = () => {
  const date = format(new Date(), "'Today is a' eeee");

  return (
    <header>
      <div className={styles.heading}>ToDo List</div>
      <p className={styles.date}>{date}</p>
    </header>
  );
};

export default Header;
