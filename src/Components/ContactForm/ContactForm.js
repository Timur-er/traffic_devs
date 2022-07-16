import React from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';


const ContactForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Минимальное количество символов 2')
            .required('This is required field!'),
        email: Yup.string().email('Не правильный email').required('Укажите email!'),
        message: Yup.string().required('This is required field!')
    });

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    policy: true,
                    subscription: true
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    console.log('submit');
                }}>
                {(formik) => {
                    return (
                        // <div className={styles.form__wrapper}>
                            <Form className={styles.form}>
                                <label className={styles.form__label}>
                                        <span className={styles.form__label_text}>
                                            Name
                                        </span>
                                        <Field className={styles.form__input} name='name' placeholder='Full Name'/>
                                </label>
                                <label className={styles.form__label}>
                                        <span className={styles.form__label_text}>
                                            Email
                                        </span>
                                        <Field className={styles.form__input} name='email' type='email' placeholder='Email'/>
                                </label>
                                <label className={styles.form__label}>
                                        <span className={styles.form__label_text}>
                                            Message
                                        </span>
                                        <Field className={styles.form__input} name='message' placeholder='Message'/>
                                    <ErrorMessage name={'message'} />
                                </label>
                                <button className={styles.form__submit_button}>
                                    Send
                                </button>
                            </Form>
                        // </div>
                    )
                }}
            </Formik>
        </>
    );
};

export default ContactForm;