import { useId } from 'react';
import css from './OrderForm.module.css';

export default function OrderForm({ onSubmit }) {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);

  // const formValues = {
  //   ...Object.fromEntries(formData),
  //   restrictions: formData.getAll('restrictions'),
  // };

  //   onSubmit(formValues);

  //   event.currentTarget.reset();
  // };

  const fieldId = useId();

  // Form action
  const handleSubmit = (formData) => {
    const formValues = {
      ...Object.fromEntries(formData),
      restrictions: formData.getAll('restrictions'),
    };

    onSubmit(formValues);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`${fieldId}-username`}>
          Name
        </label>
        <input
          type='text'
          name='username'
          className={css.input}
          id={`${fieldId}-username`}
        />

        <label className={css.label} htmlFor={`${fieldId}-email`}>
          Email
        </label>
        <input
          type='email'
          name='email'
          className={css.input}
          id={`${fieldId}-email`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type='radio' name='delivery' value='pickup' defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type='radio' name='delivery' value='courier' />
          Courier
        </label>
        <label className={css.option}>
          <input type='radio' name='delivery' value='drone' />
          Drone delivery
        </label>
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Dietary restrictions:</legend>
        <label className={css.option}>
          <input type='checkbox' name='restrictions' value='vegan' />
          Vegan
        </label>
        <label className={css.option}>
          <input type='checkbox' name='restrictions' value='gluten-free' />
          Gluten-free
        </label>
        <label className={css.option}>
          <input type='checkbox' name='restrictions' value='nut-free' />
          Nut-free
        </label>
      </fieldset>

      <label className={css.label} htmlFor={`${fieldId}-deliveryTime`}>
        Preferred delivery time
      </label>
      <select
        name='deliveryTime'
        defaultValue=''
        className={css.input}
        id={`${fieldId}-deliveryTime`}
      >
        <option value='' disabled>
          -- Choose delivery time --
        </option>
        <option value='morning'>Morning (8:00-12:00)</option>
        <option value='afternoon'>Afternoon (12:00-16:00)</option>
        <option value='evening'>Evening (16:00-20:00)</option>
      </select>

      <button type='submit' className={css.button}>
        Place order
      </button>
    </form>
  );
}
