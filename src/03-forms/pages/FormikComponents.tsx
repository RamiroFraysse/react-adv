import { Formik, Field, Form, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export function FormikComponents() {
  return (
    <div>
      <h1>Formik Yup</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name="firstName" component="span" />
            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It senior</option>
              <option value="it-jr">It junior</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <label>
              Terms and conditions
              <Field name="terms" type="checkbox" />
            </label>
            <ErrorMessage name="terms" component="span" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
