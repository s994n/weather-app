import * as Yup from "yup";

export const cityValidationSchema = Yup.object({
  location: Yup.string()
    .matches(/^[A-Za-z ]+$/, "Only letters are allowed")
    .required("Location is required"),
});
