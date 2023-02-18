import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(30, "The maximum capacity of characters has been exceeded")
    .required("First name must be filled."),
  lastName: Yup.string()
    .max(30, "The maximum capacity of characters has been exceeded")
    .required("Last name must be filled."),
  email: Yup.string()
    .email("Email format is incorrect")
    .required("Email must be filled."),
  description: Yup.string().required("description must be filled."),
});

export default ContactSchema;
