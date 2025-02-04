import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`${styles.container} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
