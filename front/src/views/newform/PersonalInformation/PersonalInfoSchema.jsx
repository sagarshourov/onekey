import { object, boolean, array, string } from "yup";

import * as yup from "yup";

export const PersonalInfoSchema = yup
  .object({
    nationalities: yup.array().when("hasMultipleNationalities", {
      is: true,
      then: (se) =>
        array().of(
          object({
            hasPassportNumber: boolean(),
            country: string().required("Country Required!"),
            passportNumber: string().when("hasPassportNumber", {
              is: true,
              then: (schema) =>
                schema.required("Passport number  Required!").min(2),
              otherwise: (schema) => string().nullable(),
            }),
          })
        ),
    }),
    residents: yup.array().when("hasMultiplePermanentResidents", {
      is: true,
      then: (se) =>
        array().of(
          object({
            country: string().required("Country Required!"),
          })
        ),
    }),

    nationalId: string().when("nationalId_check", {
      is: false,
      then: (schema) => schema.required("National is  Required!").min(2),
      otherwise: (schema) => string().nullable(),
    }),
    USSocialSecurityAreaNumber: string().when(
      "USSocialSecurityAreaNumber_check",
      {
        is: false,
        then: (schema) =>
          schema.required("U.S. Social Security Number Required!"),
        otherwise: (schema) => string().nullable(),
      }
    ),
    USTaxpayerIdNumber: string().when("USTaxpayerIdNumber_check", {
      is: false,
      then: (schema) =>
        schema.required("U.S. Social Security Number Required!"),
      otherwise: (schema) => string().nullable(),
    }),
  })
  .required();

export default PersonalInfoSchema;
