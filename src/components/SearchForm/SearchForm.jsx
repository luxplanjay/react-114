import { Field, Form, Formik } from 'formik';
import css from './SearchForm.module.css';

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ topic: '' }}
      onSubmit={(values, actions) => {
        onSearch(values.topic);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field type="text" name="topic" className={css.input} />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
