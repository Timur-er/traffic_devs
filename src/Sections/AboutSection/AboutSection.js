import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './AboutSection.module.scss';
import {ReactComponent as AboutUs} from "../../svg/aboutUs.svg";

const AboutSection = () => {
    return (
        // <SectionContainer>
            <div className={styles.about} id={'about'}>
                <div>
                    <AboutUs />
                </div>
                <div>
                    <h2 className={styles.about__title}>About us</h2>
                    <span className={styles.about__description}>
                        Traffic DevS is a team of highly motivated and experienced affiliates who are thriving to help more clients with promoting their business. We provide only high quality traffic that perfectly suits our clients.
                    </span>
                </div>
            </div>
        // </SectionContainer>
    );
};

export default AboutSection;