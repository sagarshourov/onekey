import { object, array, string } from "yup";

export const contactSchema = object({

  homeAddress: array().of(
    object().shape({
      streetAddress: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
    })
  ),
}).required();
