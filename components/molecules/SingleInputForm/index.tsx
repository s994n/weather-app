// Utils
import { searchCurrentWeather } from "@/utils/actions";

// Constants
import { ButtonVariants, InputFieldVariants } from "@/constants";

// Components
import { Button, InputField } from "../../atoms";

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
  action
}) => {
  return (
    <form className={styles["search-form"]} action={action}>
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
        required={true}
      />
      <Button
        type="submit"
        aria-label={buttonAriaLabel}
        variant={buttonVariant}
      >
        {buttonLabel}
      </Button>
    </form>
  );
};

export default SingleInputForm;