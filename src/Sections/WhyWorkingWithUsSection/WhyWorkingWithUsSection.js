import React, {useEffect, useRef} from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './WhyWorkingWithUsSection.module.scss';
import {ReactComponent as FirstInventorySVG} from "../../svg/inventory1.svg";
import {ReactComponent as SecondInventorySVG} from "../../svg/inventory2.svg";
import { useSpring, animated } from "react-spring";
import useOnScreen from "../../hooks/useOnScreen.hook";

const WhyWorkingWithUsSection = () => {
    const rightImageRef = useRef();
    const rightTextRef = useRef();
    const leftImageRef = useRef();
    const leftTextRef = useRef();
    const titleRef = useRef();
    const startPoint = 200;


    const [fromRightImageAnim, rightImageApi] = useSpring(() => ({x: startPoint, opacity: 0}))
    const [fromLeftImageAnim, leftImageApi] = useSpring(() => ({x: -startPoint, opacity: 0}))
    const [fromRightTextAnim, rightTextApi] = useSpring(() => ({x: startPoint, opacity: 0}))
    const [fromLeftTextAnim, leftTextApi] = useSpring(() => ({x: -startPoint, opacity: 0}))
    const [titleAnim, setTitleAnim] = useSpring(() => ({y: 50, opacity: 0}));

    const isTitleVisible = useOnScreen(titleRef);
    const rightImage = useOnScreen(rightImageRef);
    const rightText = useOnScreen(rightTextRef);
    const leftText = useOnScreen(leftTextRef);
    const leftImage = useOnScreen(leftImageRef);

    useEffect(() => {
        rightImage && rightImageApi.start({x:0, opacity: 1, delay:500});
        rightText && rightTextApi.start({x:0, opacity: 1, delay:250});
        leftImage && leftImageApi.start({x:0, opacity: 1, delay:500});
        leftText && leftTextApi.start({x:0, opacity: 1, delay:250});
        isTitleVisible && setTitleAnim.start({y: 0, opacity: 1, delay: 500})

    }, [rightImage, rightText, leftText, leftImage, rightImageApi, leftImageApi, rightTextApi, leftTextApi, isTitleVisible, setTitleAnim]);

    return (
        <div className={styles.inventory__background}>
            <SectionContainer id='features'>
                <animated.h2 style={titleAnim} ref={titleRef} className={styles.inventory__title}>Why working with us?</animated.h2>
                <div className={styles.inventory}>
                    <div className={styles.inventory__content}>
                        <animated.div style={fromLeftTextAnim} ref={leftTextRef} className={styles.inventory__content_section}>
                            <p>
                                Traffic devS is DSP built to deliver results. Powered by a unique AI algorithm, RTBsystem predicts, in real time, all possible outcomes from every single user available within the programmatic ecosystem, so the results are almost guaranteed.
                            </p>
                        </animated.div>
                        <animated.div ref={rightImageRef} style={fromRightImageAnim} className={styles.inventory__svg_wrapper}>
                            <FirstInventorySVG  className={styles.inventory__svg}/>
                        </animated.div>
                    </div>
                    <div className={styles.inventory__content}>
                        <animated.div style={fromLeftImageAnim} ref={leftImageRef} className={styles.inventory__svg_wrapper}><SecondInventorySVG  className={styles.inventory__svg}/></animated.div>
                        <animated.div style={fromRightTextAnim} ref={rightTextRef} className={styles.inventory__content_section}>
                            <p>In Traffic DevS we always want to make sure that our clients get the best results. Therefore we use various systems to improve targeting and promote products only on the most relevant and verified websites and other sources.

                                We use various targeting types like Browser, Keywords, OS and device, Carrier, Interests, Connection types etc. to only attract people who will like your product.</p>
                        </animated.div>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default WhyWorkingWithUsSection;