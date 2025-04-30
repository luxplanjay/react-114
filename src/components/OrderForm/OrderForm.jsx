import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { OrderSchema } from './orderSchema.js';
import css from './OrderForm.module.css';

export default function OrderForm({ onSubmit }) {
  const fieldId = useId();

  const handleSubmit = (values, helpers) => {
    onSubmit(values);
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        delivery: '',
        restrictions: [],
        deliveryTime: '',
      }}
      validationSchema={OrderSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client info:</legend>
          <label className={css.label} htmlFor={`${fieldId}-username`}>
            Name
          </label>
          <Field
            type='text'
            name='username'
            className={css.input}
            id={`${fieldId}-username`}
          />
          <ErrorMessage
            name='username'
            component='span'
            className={css.error}
          />

          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            type='email'
            name='email'
            className={css.input}
            id={`${fieldId}-email`}
          />
          <ErrorMessage name='email' component='span' className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method:</legend>
          <label className={css.option}>
            <Field type='radio' name='delivery' value='pickup' />
            Pickup
          </label>
          <label className={css.option}>
            <Field type='radio' name='delivery' value='courier' />
            Courier
          </label>
          <label className={css.option}>
            <Field type='radio' name='delivery' value='drone' />
            Drone delivery
          </label>
          <ErrorMessage
            name='delivery'
            component='span'
            className={css.error}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions:</legend>
          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='vegan' />
            Vegan
          </label>
          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='gluten-free' />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type='checkbox' name='restrictions' value='nut-free' />
            Nut-free
          </label>
          <ErrorMessage
            name='restrictions'
            component='span'
            className={css.error}
          />
        </fieldset>

        <label className={css.label} htmlFor={`${fieldId}-deliveryTime`}>
          Preferred delivery time
        </label>
        <Field
          as='select'
          name='deliveryTime'
          className={css.input}
          id={`${fieldId}-deliveryTime`}
        >
          <option value='' disabled>
            -- Choose delivery time --
          </option>
          <option value='morning'>Morning (8:00-12:00)</option>
          <option value='afternoon'>Afternoon (12:00-16:00)</option>
          <option value='evening'>Evening (16:00-20:00)</option>
        </Field>
        <ErrorMessage
          name='deliveryTime'
          component='span'
          className={css.error}
        />

        <button type='submit' className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}
