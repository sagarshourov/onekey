import { object, array, string } from "yup";

export const familySchema = object({
  fatherInfo_firstName: string().required().min(2),
  fatherInfo_lastName: string().required().min(2),

  //  hasBirthDate
  //fatherInfo_birthDate.index
  //isInUS
  //   fatherInfo_birthDate

  // motherInfo_firstname_checkbox
  // motherInfo_lastname_checkbox

  //   motherInfo_firstName
  //   motherInfo_lastName

  //   hasBirthDate

  //   motherInfo_birthDate

  //hasImmediateRelativesInUS

  //immediateRelatives.0.firstName

  //motherInfo.0.status

  //   fatherInfo.0.status

  immediateRelatives: array().when("hasImmediateRelativesInUS", {
    is: true,
    then: (se) =>
      array().of(
        object().shape({
          firstName: string().required("Platform Required!"),
          lastName: string().required("Username Required!"),
        })
      ),
  }),

  partnerInfo: array().of(
    object().shape({
      firstName: string().required("Platform Required!"),
      lastName: string().required("Username Required!"),
      birthDate: array().of(
        object().shape({
          dayIndex: string().required("Day Required!"),
          monthIndex: string().required("Month Required!"),
          yearIndex: string().required("Year Required!"),
        })
      ),
      birthCity: string().required("Birth Cty Required!"),
    })
  ),
}).required();
