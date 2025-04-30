import * as Yup from 'yup';

export const OrderSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Min 3 chars')
    .max(30, 'Max 30 chars')
    .required('This is a required field'),
  email: Yup.string().email().required('This is a required field'),
  delivery: Yup.string().oneOf(['pickup', 'courier', 'drone']).required(),
  restrictions: Yup.array()
    .of(Yup.string().oneOf(['vegan', 'gluten-free', 'nut-free']))
    .required(),
  deliveryTime: Yup.string()
    .oneOf(['morning', 'afternoon', 'evening'])
    .required(),
});
