import { object, array, string } from "yup";

export const travelCompanionsSchema = object({
  travelers: array().when("travelingWithOrganization", {
    is: true,
    then: (se) =>
      array().of(
        object({
          lastName: string().required(),
          firstName: string().required(),
          relation: string().required(),
        })
      ),
  }),
}).required();
