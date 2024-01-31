import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const userSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
  number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={nameId}>
            Name:
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label className={css.label} htmlFor={numberId}>
            Number:
          </label>
          <Field className={css.input} type="text" name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add User
        </button>
      </Form>
    </Formik>
  );
};
