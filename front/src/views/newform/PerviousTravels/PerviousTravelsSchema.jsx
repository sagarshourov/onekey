import { object, boolean, number, array, string } from "yup";

// const lastVisaSchema = object().shape({
//   postName: string().required("Post name is required"),
//   visaNumber: number()
//     .required("Visa number is required")
//     .integer("Visa number must be an integer")
//     .min(1, "Visa number must be greater than 0"),
//   year: number()
//     .required("Year is required")
//     .integer("Year must be an integer")
//     .min(1900, "Year must be after 1900")
//     .max(new Date().getFullYear(), "Year cannot be in the future"),
//   explain: string().required("Explanation is required"),
//   visaCancelledExplain: string().required(
//     "Visa cancellation explanation is required"
//   ),
// });

export const PerviousTravelsSchema = object({
  previousVisit: array().when("haveYouEverBeenToUS", {
    is: true,
    then: (se) =>
      array().of(
        object({
          // arrivalDate: string().required(),
          stayLengthValue: string().required().min(1),
          stayLengthType: string().required("Required").min(2),
        })
      ),
  }),

  USDriverLicenses: array().when("hasUSDriversLicense", {
    is: true,
    then: (se) =>
      array().of(
        object({
          licenseId: string().when("licenseId_checkbox", {
            is: false,
            then: (schema) =>
              schema.required("Driver's License  Required!").min(2),
            otherwise: (schema) => string().nullable(),
          }),
        })
      ),
  }),
  hasIssuedVisa: boolean(),
  lastVisa: array().when("hasIssuedVisa", {
    is: true,
    then: (se) =>
      array().of(
        object({
          postName: string().required().min(1),
          visaNumber: string().required("Required").min(2),
        })
      ),
  }),
  lostVisa: array().when("hadVisaLost", {
    is: true,
    then: (se) =>
      array().of(
        object({
          year: string().required().min(4),
          explain: string().required("Required").min(2),
        })
      ),
  }),

  canceledVisa: array().when("hasVisaCancelled", {
    is: true,
    then: (se) =>
      array().of(
        object({
          visaCancelledExplain: string().required("Required").min(2),
        })
      ),
  }),

  refusedVisa: array().when("hasBeenRefusedForVisa", {
    is: true,
    then: (se) =>
      array().of(
        object({
          year: string().required("Required").min(2),
          explain: string().required("Required").min(2),
        })
      ),
  }),

  hasAnyoneEverFilledOnBehalfExplain: string().when(
    "hasAnyoneEverFilledOnBehalf",
    {
      is: true,
      then: (schema) => schema.required("Explain is  Required!").min(2),
      otherwise: (schema) => string().nullable(),
    }
  ),

  // lastVisa: array().when("hasIssuedVisa", {
  //   is: true,
  //   then: (se) =>
  //     array().of(
  //       object({
  //         postName: string().required(),
  //         visaNumber: number().required(),
  //         year: number().required(),
  //         explain: string().required(),
  //         visaCancelledExplain: string().required(),
  //       })
  //     ),
  // }),

  // lastVisa: object().when("hasIssuedVisa", {
  //   is: true, // If hasIssuedVisa is true, then validate lastVisa
  //   then: lastVisaSchema.required(),
  //   otherwise: object().shape({
  //     postName: string(),
  //     visaNumber: number(),
  //     year: number(),
  //     explain: string(),
  //     visaCancelledExplain: string(),
  //   }),
  // }),
}).required();
