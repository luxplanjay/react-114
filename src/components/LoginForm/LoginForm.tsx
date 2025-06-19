import { Formik, Form, Field, type FormikHelpers } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useAppDispatch } from "../../hooks/redux";
import type { UserLoginValues } from "../../types/auth";
import css from "./LoginForm.module.css";

const formValues: UserLoginValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: UserLoginValues,
    actions: FormikHelpers<UserLoginValues>
  ) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={formValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
