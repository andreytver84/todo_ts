import { PropsChild } from "../types/interfaces_types";
import styles from "./Button.module.css";

type ButtonProps = PropsChild & {
  className: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  const classes = styles.btn + " " + styles[className];
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
