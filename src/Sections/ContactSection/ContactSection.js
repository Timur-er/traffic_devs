import React from 'react';
import ContactForm from "../../Components/ContactForm/ContactForm";
import styles from './ContactSection.module.scss';

const ContactSection = () => {
    return (

            <div className={styles.section__wrapper} id='contactUs'>

                <div className={styles.section__form_container}>
                    <h1 className={styles.section__title}>Contact us</h1>
                    <ContactForm/>
                </div>

                <div className={styles.section__contacts_container}>
                        <h2 className={styles.section__contacts_title}>
                            We'd love to talk to discuss new business opportunities.
                        </h2>

                    <div className={styles.section__contact_info}>
                        <div className={styles.section__contact_row}>
                                <span>
                                    Email:
                                </span>
                            <span className={styles.section__contact_cell}>
                                    trafficdevs@gmail.com
                                </span>
                        </div>
                        <div className={styles.section__contact_row}>
                                <span>
                                    Place:
                                </span>
                            <span className={styles.section__contact_cell}>
                                Boumpoulinas, 1-3, BOUBOULINA BULIDING, Flat/Office 42, 1060, Nicosia, Cyprus
                            </span>
                        </div>
                    </div>

                </div>

            </div>

    );
};

export default ContactSection;