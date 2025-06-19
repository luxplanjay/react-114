import { Formik, Form, Field, type FormikHelpers } from "formik";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";
import type { UserRegisterValues } from "../../types/auth";

const formValues: UserRegisterValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: UserRegisterValues,
    actions: FormikHelpers<UserRegisterValues>
  ) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
