import React from 'react';
import styles from './AboutSection.module.scss';
import {ReactComponent as AboutUs} from "../../svg/aboutUs.svg";

const AboutSection = () => {
    return (
            <div className={styles.about} id={'about'}>
                <div className={styles.about__text_wrapper}>
                    <h2 className={styles.about__title}>About us</h2>
                    <span className={styles.about__description}>
                        Traffic DevS is a team of highly motivated and experienced affiliates who are thriving to help more clients with promoting their business. We provide only high quality traffic that perfectly suits our clients.
                    </span>
                </div>
                <div className={styles.about__svg_wrapper}>
                    <AboutUs className={styles.about__svg}/>
                </div>
            </div>
    );
};

export default AboutSection;