import { PropsChild } from "./interfaces_types";
import styles from "./Button.module.css";

type ButtonProps = PropsChild & {
  className: string;
};

const Button = ({ children, className }: ButtonProps) => {
  const classes = styles.btn + " " + styles[className];
  return <button className={classes}>{children}</button>;
};

export default Button;
