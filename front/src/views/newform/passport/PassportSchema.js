import { object, array, string } from "yup";

export const passportSchema = object({
  passportNumber: string().required().min(2),
  passportCity: string().required().min(2),

  passportBookNumber: string().when("passportBookNumber_checkbox", {
    is: false,
    then: (schema) => schema.required("Passport Book Number required "),
    otherwise: (schema) => string().nullable(), // or any other validation rules for when it's false
  }),

  // nationalities: array().of(
  //   object().shape({
  //     country: string().when("hasEverLostPassport", {
  //       is: true,
  //       then: (schema) => schema.required("Country is required"),
  //       otherwise: (schema) => schema.optional(), // or any other validation rules for when it's false
  //     }),
  //     passportNumber: string().when("hasEverLostPassport", {
  //       is: true,
  //       then: (schema) => schema.required("Passport number is required"),
  //       otherwise: (schema) => schema.optional(), // or any other validation rules for when it's false
  //     }),
  //   })
  // ),
  // lostpassports: array().of(
  //   object().shape({
  //     country: string().required("Country is required"),
  //     passportNumber: string().when("hasPassportNumber", {
  //       is: true,
  //       then: (schema) => schema.required("Passport number is required"),
  //       otherwise: (schema) => schema.min(0), // or any other validation rules for when it's false
  //     }),
  //   })
  // ),
}).required();
