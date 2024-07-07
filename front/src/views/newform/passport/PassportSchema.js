import { object, array, string } from "yup";

export const passportSchema = object({
  passportType: string().required(),
  passportNumber: string().required().min(2),
  passportCity: string().required().min(2),
  passportBookNumber: string().when("passportBookNumber_checkbox", {
    is: false,
    then: (schema) => schema.required("Passport Book Number required "),
    otherwise: (schema) => string().nullable(), // or any other validation rules for when it's false
  }),
  passportIssueCountry: string().required().min(2),
  passportState: string().required().min(2),
  passportCountry: string().required().min(2),
  nationalityInput: string().required().min(2),
  


  lostpassports: array().when("hasEverLostPassport", {
    is: true,
    then: (se) =>
      array().of(
        object().shape({
          passportNumber: string().required("Platform Required!"),
          country: string().required("Username Required!"),
          explain: string().required("Explain Required!"),
          
        })
      ),
  }),

  
}).required();
