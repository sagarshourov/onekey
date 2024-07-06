import { object, boolean, array, string } from "yup";
import reasonsForTravelData from "./reasonsForTravel.json";

export const tripSchema = object({
  reasonForTripToUSSelect: string().required().min(2),
  purposes: array().of(
    object().shape({
      mainPurpose: string().required("Purpose  is required"),
      specify: string().required("Specify is required")
    })
  ),
  hasTravelPlansInput : string().required("Travel Plans is required"),
  personPayingForTrip : string().required("Person Paying for trip required"),
}).required();
