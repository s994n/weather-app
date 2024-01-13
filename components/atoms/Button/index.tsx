import React, { ReactNode } from "react";

// Constants
import { ButtonVariants } from "../../../constants/ButtonVariants";

// Styles
import styles from "./styles.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariants;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = ButtonVariants.default,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
