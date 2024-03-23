import * as yup from "yup";

// Define a function to create the Yup schema
const createSchema = (fieldVisibility) => {
  return yup.object().shape({
    firstName: yup.string().required("First Name Required!").min(2),
    lastName: yup.string().required().min(2),
    userEmail: yup.string().required().email(),
    fullName: yup.string().required().min(2),
    additionalFirstName: yup.string().min(2),
    additionalLastName: yup.string().min(2),
    birthStateProvince: yup.string().when(fieldVisibility.birthStateProvince, {
      is: true,
      then: yup.string().required("Birth State/Province Required!").min(2),
      otherwise: yup.string().min(2), // Validation when not required
    }),
  });
};

// Example usage
const fieldVisibility = {
  birthStateProvince: true, // Set to true or false based on the visibility of the birthStateProvince field
};

const schema = createSchema(fieldVisibility);

export default schema;
