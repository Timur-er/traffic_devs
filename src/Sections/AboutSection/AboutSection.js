import React, {useEffect, useRef} from 'react';
import styles from './AboutSection.module.scss';
import {ReactComponent as AboutUs} from "../../svg/aboutUs.svg";
import {useSpring, animated} from "react-spring";
import useOnScreen from "../../hooks/useOnScreen.hook";

const AboutSection = () => {
    const titleRef = useRef();
    const textRef = useRef();
    const imageRef = useRef();

    const [titleAnim, setTitleAnim] = useSpring(() => ({y: 50, opacity: 0}));
    const [textAnim, setTextAnim] = useSpring(() => ({x: -200, opacity: 0}));
    const [imageAnim, setImageAnim] = useSpring(() => ({x:200, opacity: 0}));

    const isTitleVisible = useOnScreen(titleRef);
    const isTextVisible = useOnScreen(textRef);
    const isImageVisible = useOnScreen(imageRef);

    useEffect(() => {
        isTitleVisible && setTitleAnim.start({y:0, opacity: 1, delay: 250})
        isTextVisible && setTextAnim.start({x:0, opacity: 1, delay: 250})
        isImageVisible && setImageAnim.start({x:0, opacity: 1, delay: 250})
    }, [isTitleVisible, isTextVisible, isImageVisible, setImageAnim, setTitleAnim, setTextAnim])


    return (
            <div className={styles.about} id={'about'}>
                <div className={styles.about__text_wrapper}>
                    <animated.h2 style={titleAnim} ref={titleRef} className={styles.about__title}>About us</animated.h2>
                    <animated.span style={textAnim} ref={textRef} className={styles.about__description}>
                        Traffic DevS is a team of highly motivated and experienced affiliates who are thriving to help more clients with promoting their business. We provide only high quality traffic that perfectly suits our clients.
                    </animated.span>
                </div>
                <animated.div style={imageAnim} ref={imageRef} className={styles.about__svg_wrapper}>
                    <AboutUs className={styles.about__svg}/>
                </animated.div>
            </div>
    );
};

export default AboutSection;