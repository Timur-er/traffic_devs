import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './OfferSection.module.scss';
import {ReactComponent as Surf} from "../../svg/surf.svg";
import {Link} from "react-scroll";


const OfferSection = () => {
    return (
        <div className={styles.main__background}>
            <SectionContainer>
                <div className={styles.main} id='whoWeAre'>
                    <div className={styles.main__offer}>
                        <h1 className={styles.main__title}>
                            Traffic DevS - We ride only <span className={styles.main__title_accent}>high quality traffic</span> waves to promote your business
                        </h1>
                        <Link to="contactUs" spy={true} smooth={true} offset={50} duration={500} className={styles.main__button}>Contact Us</Link>
                    </div>
                    <div className={styles.main__svg_wrapper}>
                        <Surf className={styles.main__svg}/>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default OfferSection;