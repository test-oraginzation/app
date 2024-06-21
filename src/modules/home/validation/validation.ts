import * as Yup from 'yup';

export const validationSchemaSettings = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  nickname: Yup.string().required('Nickname is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
});
