import * as Yup from 'yup';

export const validationSchemaSettings = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  nickname: Yup.string().required('Nickname is required'),
  dateOfBirth: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format')
    .required('Date of Birth is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      'The phone number must start with +380 and contain 9 digits',
    )
    .required('Phone number is a required field'),
});
