import React, { ReactNode } from "react";

// Constants
import { ButtonVariants } from "../../../constants/ButtonVariants";

// HOCs
import { WithValidateVariantIsInStyles } from "@/hocs/WithValidateVariantIsInStyles";

// Styles
import styles from "./styles.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariants;
}

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

export default WithValidateVariantIsInStyles(styles)(Button);
