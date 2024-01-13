// components/atoms/InputField/index.tsx
import React, { InputHTMLAttributes } from 'react';

// Constants
import { InputFieldVariants } from '@/constants/InputFieldVariants';

// Styles
import styles from './styles.module.scss';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputFieldVariants;
};

const InputField: React.FC<InputFieldProps> = ({
  variant = InputFieldVariants.default,
  ...props
}) => {
  const inputClass = `${styles.input} ${styles[variant]}`;
  return (
    <input className={inputClass} {...props} />
  );
};

export default InputField;