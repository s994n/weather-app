"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";

// Components
import { Button, InputField } from "@components/atoms";

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
  formAriaLabel: string;
  routeToPage: string;
  validationSchema: any;
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
  routeToPage,
  validationSchema,
}) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ [name]: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        router.push(`${routeToPage}/${values.location}`);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles["search-form"]} aria-label={formAriaLabel}>
          <label htmlFor={id} className={styles["visually-hidden"]}>
            {placeholder}
          </label>
          <Field
            id={id}
            name={name}
            placeholder={placeholder}
            as={InputField}
            type={inputFieldType}
            variant={inputFieldVariant}
            required
          />
          <Button
            type="submit"
            aria-label={buttonAriaLabel}
            variant={isSubmitting ? ButtonVariants.disabled : buttonVariant}
          >
            {isSubmitting ? "Getting weather..." : buttonLabel}
          </Button>
          <ErrorMessage
            name={name}
            component="div"
            className={styles["error-message"]}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SingleInputForm;
