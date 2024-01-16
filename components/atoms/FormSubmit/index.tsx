"use client";
import { useFormStatus } from "react-dom";

// Components
import { Button } from "../";

// Constants
import { ButtonVariants } from "@/constants";

interface FormSubmitProps {
  buttonVariant?: ButtonVariants;
  buttonAriaLabel: string;
  buttonLabel: string;
}

const FormSubmit: React.FC<FormSubmitProps> = ({
  buttonVariant,
  buttonAriaLabel,
  buttonLabel,
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-label={buttonAriaLabel}
      variant={pending ? ButtonVariants.disabled : buttonVariant}
    >
      {pending ? "Getting weather..." : buttonLabel}
    </Button>
  );
};

export default FormSubmit;
