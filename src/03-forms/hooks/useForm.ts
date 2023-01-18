import { useState } from "react";

function useForm<T>(initState:T) {
  const [formData, setFormData] = useState(initState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };
  const resetForm = () => {
    setFormData({ ...initState });
  };
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  return {
    ...formData,
    //Properties
    formData,
    //Methods
    isValidEmail,
    onChange,
    resetForm,
  }
}

export default useForm