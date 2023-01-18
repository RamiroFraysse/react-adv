import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export function FormikAbstractation() {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("Requerido"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opción no es permitida.")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
        })}
      >
        {(formik) => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Ramiro"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Fraysse"
            />
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="ramiro@google.com"
              type="email"
            />
            <MySelect label="Job Type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It senior</option>
              <option value="it-jr">It junior</option>
            </MySelect>
            <MyCheckbox label="Terms & Conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
