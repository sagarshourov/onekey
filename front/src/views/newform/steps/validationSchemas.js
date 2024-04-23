import { object, array, string } from "yup";

export const firstStepSchema = object({
  firstName: string().required("First Name Required!").min(2),
  lastName: string().required().min(2),
  userEmail: string().required().email(),

  // additionalFirstName: string().required().min(2),
  additionalFirstName: string().when("hasAdditionalNames", {
    is: true,
    then: (schema) => schema.required("Must enter"),
    otherwise: (schema) => string().nullable(), // or any other validation rules for when it's false
  }),
  additionalLastName: string().when("hasAdditionalNames", {
    is: true,
    then: (schema) => schema.required("Must enter").min(2),
    otherwise: (schema) => string().nullable(), // or any other validation rules for when it's false
  }),
  telecodeFirstName: string().when("hasTelecode", {
    is: true,
    then: (schema) => schema.required("Must enter"),
    otherwise: (schema) => schema.min(0), // or any other validation rules for when it's false
  }),
  telecodeLastName: string().when("hasTelecode", {
    is: true,
    then: (schema) => schema.required("Must enter"),
    otherwise: (schema) => schema.min(0), // or any other validation rules for when it's false
  }),
  birthCity: string().required().min(2),

  birthStateProvince: string().when("hasBirthStateProvince", {
    is: false,
    then: (schema) => schema.required("Birth State/Province Required!").min(2),
    otherwise: (schema) => schema.min(0),
  }),
  fullName: string().when("hasFullName", {
    is: false,
    then: (schema) => schema.required("Full Name is  Required!").min(2),
    otherwise: (schema) => schema.min(0),
  }),
  maritalStatus: string().required("Marital Status Required!"),
  birthCountry: string().required("Country of Birth Required!").min(2),
}).required();
