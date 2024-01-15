// Components
import { InputField, FormSubmit } from "../../atoms";

// Constants
import { ButtonVariants, InputFieldVariants } from "@/constants";

// Styles
import styles from "./styles.module.scss";

interface SingleInputFormProps {
  inputFieldType: string;
  inputFieldVariant?: InputFieldVariants;
  id: string;
  name: string;
  placeholder: string;
  buttonVariant?: ButtonVariants;
  buttonAriaLabel: string;
  buttonLabel: string;
  formAriaLabel?: string;
  action: (formData: FormData) => Promise<void>;
}

const SingleInputForm: React.FC<SingleInputFormProps> = ({
  inputFieldType,
  inputFieldVariant,
  id,
  name,
  placeholder,
  buttonVariant,
  buttonAriaLabel,
  buttonLabel,
  formAriaLabel,
  action
}) => {
  return (
    <form className={styles["search-form"]} action={action} aria-label={formAriaLabel}>
      <label htmlFor={id} className={styles["visually-hidden"]}>
        {placeholder} {/* Assuming placeholder is descriptive enough for the label */}
      </label>
      <InputField
        variant={inputFieldVariant}
        type={inputFieldType}
        id={id}
        name={name}
        aria-required="true"
        placeholder={placeholder}
        className={styles.input}
        required
      />
      <FormSubmit
        buttonVariant={buttonVariant}
        buttonAriaLabel={buttonAriaLabel}
        buttonLabel={buttonLabel}
      />
    </form>
  );
};

export default SingleInputForm;