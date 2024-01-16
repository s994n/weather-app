import React, { InputHTMLAttributes } from "react";
import classNames from 'classnames';

// Constants
import { InputFieldVariants } from "@/constants/InputFieldVariants";

// HOCs
import { WithValidateVariantIsInStyles } from "@/hocs/WithValidateVariantIsInStyles";

// Styles
import styles from "./styles.module.scss";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputFieldVariants;
}

const InputField: React.FC<InputFieldProps> = ({
  variant = InputFieldVariants.default,
  className,
  ...props
}) => {
  const inputClass = classNames(
    styles['input-field'],
    styles[variant],
    className
  );
  return <input className={inputClass} {...props} />;
};

export default WithValidateVariantIsInStyles(styles)(InputField);
