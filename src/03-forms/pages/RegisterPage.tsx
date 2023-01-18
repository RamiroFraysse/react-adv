import useForm from "../hooks/useForm";
import "../styles/styles.css";
export function RegisterPage() {
  const {
    name,
    email,
    password1,
    password2,
    isValidEmail,
    onChange,
    resetForm,
  } = useForm({
    name: "ramiro",
    email: "ramirofraysse@gmail.com",
    password1: "123456",
    password2: "123456",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form noValidate={true} onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        {isValidEmail(email) && <span>Email no es válido</span>}
        <input
          name="password1"
          type="password"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 6 && (
          <span>La contraseña tiene que tener 6 letras</span>
        )}
        <input
          name="password2"
          type="password"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length > 0 && password1 === password2 && (
          <span>La contraseña tiene que tener 6 letras</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
