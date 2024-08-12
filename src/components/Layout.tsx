import { Outlet } from "react-router-dom";
import Header from "./Header";
import Wrap from "./Wrap";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <div className={styles.wrap}>
        <Outlet />
      </div>

      <footer>2024</footer>
    </Wrap>
  );
};

export default Layout;
