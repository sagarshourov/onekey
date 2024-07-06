import { object, array, string } from "yup";

export const educationSchema = object({
  tribeName: string().when("belongsToTribe", {
    is: true,
    then: (schema) => schema.required("Tribe Name is required!"),
    otherwise: (schema) => string().nullable(),
  }),
  speakingLanguagesInput: string()
    .required("Speaking Languages are required!")
    .min(2, "At least 2 characters are required!"),

  // additionalLanguage: array().when("hasOtherSpeakingLanguages", {
  //   is: true,
  //   then: (schema) =>
  //     array().of(
  //       object().shape({
  //         otherSpeakingLanguages: string().required(
  //           "Other speaking language is required!"
  //         ),
  //       })
  //     ),
  //   otherwise: (schema) => string().nullable(),
  // }),

  organizations: string().when("hasWorkedToOrganization", {
    is: true,
    then: (schema) => schema.required("Organization Name is required!"),
    otherwise: (schema) => string().nullable(),
  }),
  jobTypeInput: string()
    .required("Job Type is required!")
    .min(2, "At least 2 characters are required!"),
  jobEmployer: string()
    .required("Employer is required!")
    .min(2, "At least 2 characters are required!"),
  jobPhoneNumber: string()
    .required("Job Phone Number is required!")
    .min(2, "At least 2 characters are required!"),
  jobAddress: array().of(
    object().shape({
      streetAddress: string().required("Street Address is required!"),
      streetAddress2: string().required("Street Address Line 2 is required!"),
      city: string().required("City is required!"),
      state: string().required("State is required!"),
      zipCode: string().required("Zip Code is required!"),
      country: string().required("Country is required!"),
    })
  ),
  jobMonthlyIncome: string().when("hasJobMonthlyIncome_checkbox", {
    is: false,
    then: (schema) => schema.required("Tribe Name required "),
    otherwise: (schema) => string().nullable(),
  }),

  previousJobs: array().when("hasBeenPreviouslyEmployed", {
    is: true,
    then: (sc) =>
      array().of(
        object().shape({
          employer: string().required("Employer is required!"),
          streetAddress: string().required("Street Address is required!"),
          streetAddress2: string().required(
            "Street Address Line 2 is required!"
          ),
          city: string().required("City is required!"),
          state: string().required("State is required!"),
          zipCode: string().required("Zip Code is required!"),
          jobPhoneNumber: string().required("Job Phone Number is required!"),
          title: string().required("Title is required!"),
          supervisor_last_name: string().required(
            "Supervisor's Last Name is required!"
          ),
          supervisor_first_name: string().required(
            "Supervisor's First Name is required!"
          ),
          jobDescribe: string().required("Job Description is required!"),
        })
      ),
    otherwise: (schema) => array().nullable(),
  }),
}).required();
