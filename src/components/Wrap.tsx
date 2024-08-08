import styles from "./Wrap.module.css";

type Props = {
  children: React.ReactNode;
};

const Wrap = ({ children }: Props) => {
  return <div className={styles.wrap}>{children}</div>;
};

export default Wrap;
