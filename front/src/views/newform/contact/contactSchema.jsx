import { object, array, string, boolean } from "yup";

export const contactSchema = object({
  homeAddress: array().of(
    object().shape({
      streetAddress: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
      streetAddress2: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
      city: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
      state: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
      zipCode: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
      country: string()
        .required("Street Address is required")
        .min(2, "Street Address must be at least 2 characters"),
    })
  ),
  hasSameMailingAddressAsHome: boolean(),
  // phonePrimary: string().when("hasSameMailingAddressAsHome", {
  //   is: false,
  //   then: (schema) => schema.required("Phone Number required ").min(2),
  //   otherwise: (schema) => string().nullable(), // or any other validation rules for when it's false
  // }),

  // mailingAddress: object().when("hasMultiplePermanentResidents", {
  //   is: false,
  //   then: (se) =>
  //     object().shape({
  //       streetAddress: string().required("Country Required!"),
  //       streetAddress2: string().required("Country Required!"),
  //       city: string().required("Country Required!"),
  //     }),
  // }),

  mailingAddress: array().when("hasMultiplePermanentResidents", {
    is: false,
    then: (se) =>
      array().of(
        object().shape({
          streetAddress: string().required("Country Required!"),
          streetAddress2: string().required("Country Required!"),
          city: string().required("City Required!"),
          state: string().required("State Required!"),
          zipCode: string().required("ZipCode Required!"),
          country: string().required("Country Required!"),
        })
      ),
  }),

  phonePrimary: string().required("Phone Number required ").min(2),
  phoneWork: string().required("Phone Network required ").min(2),
  additionalPhones: array().when("hasAdditionalPhoneNumbers", {
    is: true,
    then: (se) =>
      array().of(
        object().shape({
          phoneNumber: string().required("Phone number Required!"),
        })
      ),
  }),

  additionalEmails: array().when("hasAdditionalEmails", {
    is: true,
    then: (se) =>
      array().of(
        object().shape({
          email: string().required("Email Required!"),
        })
      ),
  }),

  socialsMedia: array().of(
    object().shape({
      platform: string().required("Platform Required!"),
      username: string().required("UserName Required!"),
    })
  ),
  additionalSocials: array().when("hasAdditionalSocialMedia", {
    is: true,
    then: (se) =>
      array().of(
        object().shape({
          platform: string().required("Platform Required!"),
          username: string().required("Username Required!"),
        })
      ),
  }),


  
}).required();
