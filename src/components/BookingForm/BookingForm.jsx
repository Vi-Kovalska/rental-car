import React, { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './BookingForm.module.css';
import toast from 'react-hot-toast';
import { onlyLetters, validEmail } from '../../constants';

const BookingForm = () => {
  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commentId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!').min(3, 'Too Short!').max(50, 'Too Long!').matches(onlyLetters, 'The name must contain only letters!'),
    email: Yup.string().required('Email is required!').matches(validEmail, "Input the valid email!"),
    startDate: Yup.date().required('Date is required!').transform((value) => {
      return new Date(value);
    })
    .test(
      'is-not-in-past',
      'Date must be today or later',
      function (value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // обнуляем время
  
        const selectedDate = new Date(value);
        selectedDate.setHours(0, 0, 0, 0);
  
        return selectedDate >= today;
      }
    ),
    comment: Yup.string(),
  });
  const initialValues = {
    name: '',
    email: '',
    startDate: '',
    comment: ''
  };  
  const handleSubmit = (values, actions) => {
    toast.success(`The car has been successfully booked on the date ${values.startDate}! 
      Our manager will contact you shortly!`);
    actions.resetForm();
  }
  return (
    <div className={s.wrapper}>
    <h2 className={s.title}>Book your car now</h2>
    <p className={s.paragraph}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={s.form}>
          <div className={s.fieldWrapper}>
            <label htmlFor={nameId}></label>
            <Field id={nameId} name='name' type='text' className={s.input} placeholder='Name*'/>
          <ErrorMessage name='name' component='p' className={s.error} />
          </div>
          <div className={s.fieldWrapper}>
            <label htmlFor={emailId}></label>
            <Field id={emailId} name='email' type='email' className={s.input} placeholder='Email*'/>
            <ErrorMessage name='email' component='p' className={s.error}/>
        </div>
          <div className={s.fieldWrapper}>
            <label htmlFor={dateId}>
          <Field id={dateId} name="startDate" type="date" className={s.input} placeholder='Booking date'/></label>
              <ErrorMessage name="startDate" component="p" className={s.error} />
          </div>
          <div className={s.fieldWrapper}>
            <label htmlFor={commentId}></label>
            <Field id={commentId} name='comment' type='text' className={s.input} placeholder='Comment'/>
            <ErrorMessage name='comment' component='p' className={s.error}/>
        </div>
          <button type='submit' className={s.btnSub}>Send</button>
        </Form>
      </Formik>
      </div>
  );
};

export default BookingForm;
