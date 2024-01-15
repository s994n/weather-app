import React, { InputHTMLAttributes } from 'react';

// Constants
import { InputFieldVariants } from '@/constants/InputFieldVariants';

// HOCs
import { WithValidateVariantIsInStyles } from '@/hocs/WithValidateVariantIsInStyles';

// Styles
import styles from './styles.module.scss';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
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

export default WithValidateVariantIsInStyles(styles)(InputField);