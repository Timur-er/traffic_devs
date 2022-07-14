import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import ContactForm from "../../Components/ContactForm/ContactForm";
import styles from './ContactSection.module.scss';

const ContactSection = () => {
    return (
        <div className={styles.section}>

            <div className={styles.section__wrapper} id='contactUs'>

                <div className={styles.section__form_container}>
                    <h1 className={styles.section__title}>Contact us</h1>
                    <ContactForm/>
                </div>

                <div className={styles.section__contacts_container}>
                        <span className={styles.section__contacts_title}>
                            We'd love to talk to discuss new business opportunities.
                        </span>

                    <div className={styles.section__contact_info}>
                        <div className={styles.section__contact_row}>
                                <span>
                                    telephone
                                </span>
                            <span className={styles.section__contact_cell}>
                                    + 49 1234564444
                                </span>
                        </div>
                        <div className={styles.section__contact_row}>
                                <span>
                                    email
                                </span>
                            <span className={styles.section__contact_cell}>
                                    contact@rtbsystem.com
                                </span>
                        </div>
                        <div className={styles.section__contact_row}>
                                <span>
                                    place
                                </span>
                            <span className={styles.section__contact_cell}>
                                    Ideal Media US, Inc.
                                    15720 Brixham Hill Avenue, Suite 300, Charlotte, North Carolina, 28277
                                </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ContactSection;