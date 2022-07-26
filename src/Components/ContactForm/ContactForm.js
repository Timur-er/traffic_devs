import React, {useRef, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import styles from './ContactForm.module.scss';
import {NavLink} from "react-router-dom";
import emailjs from 'emailjs-com';
import {PRIVACY, TERMS} from "../../routes/const";


const ContactForm = () => {
    const form = useRef();
    const [isMessageSend, setIsMessageSend] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Minimum 2 symbols')
            .required('This is required field!'),
        email: Yup.string().email('Incorrect email').required('This is required field!'),
        message: Yup.string().required('This is required field!'),
        policy: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    });

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                    policy: true,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, {resetForm, setSubmitting}) => {
                    emailjs.sendForm('gmail_serviceTRAFFICDEVS', 'template_a5zevvf', form.current, 'PIAvdRuSAqZ71T2Ox')
                        .then((result) => {
                            console.log(result.text);
                        }, (error) => {
                            console.log(error.text);
                        });
                    setIsMessageSend(true)
                    resetForm()
                }}>
                {(formik) => {
                    return (
                        <Form ref={form} className={styles.form}>
                            <label className={styles.form__label}>
                                <div className={styles.form__label_text}>
                                    Name
                                    <span className={styles.form__error}>
                                            <ErrorMessage name={'name'}/>
                                            </span>
                                </div>
                                <Field className={styles.form__input} name='name' placeholder='Full Name'/>
                            </label>
                            <label className={styles.form__label}>
                                <div className={styles.form__label_text}>
                                    Email
                                    <span className={styles.form__error}>
                                            <ErrorMessage name={'email'}/>
                                            </span>
                                </div>
                                <Field className={styles.form__input} name='email' type='email' placeholder='Email'/>
                            </label>
                            <label className={styles.form__label}>
                                <div className={styles.form__label_text}>
                                    Message
                                    <span className={styles.form__error}>
                                            <ErrorMessage name={'message'}/>
                                            </span>
                                </div>
                                <Field className={styles.form__input} name='message' placeholder='Message'/>
                            </label>
                            <label className={styles.form__checkbox_wrapper}>
                                <Field name='policy' type='checkbox'/>
                                <div className={styles.form__checkbox_text}>
                                    <span>
                                    I accept the <NavLink className={styles.form__link} to={TERMS}>Terms and
                                    Conditions</NavLink> and <NavLink className={styles.form__link} to={PRIVACY}>Privacy
                                    Policy</NavLink>.
                                    </span>

                                    <span className={styles.form__error}>
                                    <ErrorMessage name='policy'/>
                                    </span>
                                </div>
                            </label>
                            <button disabled={isMessageSend} type='submit'
                                    className={isMessageSend ? `${styles.form__submit_button} ${styles.form__disable_submit}` : `${styles.form__submit_button}`}>
                                {isMessageSend ? ('Message successfully delivered!') : ('Send')}
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    );
};

export default ContactForm;