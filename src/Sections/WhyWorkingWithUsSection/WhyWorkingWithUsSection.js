import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './WhyWorkingWithUsSection.module.scss';
import {ReactComponent as FirstInventorySVG} from "../../svg/inventory1.svg";
import {ReactComponent as SecondInventorySVG} from "../../svg/inventory2.svg";

const WhyWorkingWithUsSection = () => {
    return (
        <div className={styles.inventory__background}>
            <SectionContainer id='features'>
                <h2 className={styles.inventory__title}>Why working with us?</h2>
                <div className={styles.inventory}>
                    <div className={styles.inventory__content}>
                        <div className={styles.inventory__content_section}>
                            <p>
                                In Traffic DevS we always want to make sure that our clients get the best results. Therefore we use various systems to improve targeting and promote products only on the most relevant and verified websites and other sources.                            </p>
                        </div>
                        <div className={styles.inventory__svg_wrapper}>
                            <FirstInventorySVG  className={styles.inventory__svg}/>
                        </div>
                    </div>
                    <div className={styles.inventory__content}>
                        <div className={styles.inventory__svg_wrapper}><SecondInventorySVG  className={styles.inventory__svg}/></div>
                        <div className={styles.inventory__content_section}>
                            <p>We use various targeting types like Browser, Keywords, OS and device, Carrier, Interests, Connection types etc. to only attract people who will like your product.</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default WhyWorkingWithUsSection;