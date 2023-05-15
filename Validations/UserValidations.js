import * as yup from 'yup';

export const userSchema = yup.object({
    name: yup.string().required('Name field is required'),
    email: yup.string().email('Email format is not valid').required('Email is required'),
    // gender: yup.string().required('This field is required'),
    // job: yup.string().required('This field is required'),
})