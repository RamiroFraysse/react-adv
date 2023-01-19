import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";
export function RegisterFormikPage() {
  return (
    <div>
      <h1>RegisterFormikPage</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Requerido")
            .min(2, "El nombre debe de ser de 3 caracteres o mas")
            .max(15, "Como máximo puede tener 15 caracteres"),
          email: Yup.string()
            .email("Revise el formato del correo")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Mínimo 6 letras")
            .required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseñas no son iguales")
            .required("Requerido"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleReset }) => (
          <Form noValidate={true}>
            <MyTextInput
              name="name"
              label="Nombre"
              placeholder="Ramiro Fraysse"
            />
            <MyTextInput
              name="email"
              label="Email"
              placeholder="ramiro@google.com"
            />
            <MyTextInput name="password1" type="password" label="Contraseña" />
            <MyTextInput
              name="password2"
              type="password"
              label="Repetir Contraseña"
            />
            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterFormikPage;
