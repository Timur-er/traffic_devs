import React, {useEffect, useRef} from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './OfferSection.module.scss';
import {ReactComponent as Surf} from "../../svg/surf.svg";
import {Link} from "react-scroll";
import {useSpring, animated} from "react-spring";
import useOnScreen from "../../hooks/useOnScreen.hook";


const OfferSection = () => {
    const textRef = useRef();
    const imageRef = useRef();

    const [textAnim, setTextAnim] = useSpring(() => ({x: -200, opacity: 0}));
    const [imageAnim, setImageAnim] = useSpring(() => ({x: 200, opacity: 0}));

    const isTextVisible = useOnScreen(textRef);
    const isImageVisible = useOnScreen(imageRef);

    useEffect(() => {
        isImageVisible && setImageAnim({x: 0, opacity: 1, delay: 250});
        isTextVisible && setTextAnim({x: 0, opacity: 1, delay:250});

    }, [setImageAnim, setTextAnim, isImageVisible, isTextVisible])

    return (
        <div className={styles.main__background}>
            <SectionContainer>
                <div className={styles.main} id='whoWeAre'>
                    <div className={styles.main__offer}>
                        <animated.h1 style={textAnim} ref={textRef} className={styles.main__title}>
                            Traffic DevS - We ride only <span className={styles.main__title_accent}>high quality traffic</span> waves to promote your business
                        </animated.h1>
                        <Link to="contactUs" spy={true} smooth={true} offset={50} duration={500} className={styles.main__button}>Contact Us</Link>
                    </div>
                    <animated.div style={imageAnim} ref={imageRef} className={styles.main__svg_wrapper}>
                        <Surf className={styles.main__svg}/>
                    </animated.div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default OfferSection;