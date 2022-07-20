import React, {useEffect, useRef} from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './StatisticSection.module.scss';
import { ReactComponent as StatisticSVG } from "../../svg/statistic.svg";
import {config, useSpring, animated} from "react-spring";
import useOnScreen from "../../hooks/useOnScreen.hook";

const StatisticSection = () => {
    const rightImageRef = useRef();
    const titleRef = useRef();
    const campaignsRef = useRef();
    const professionalsRef = useRef();
    const yearsRef = useRef();
    const impressionsRef = useRef();

    const startPoint = 200;

    const [fromRightImageAnim, rightImageApi] = useSpring(() => ({x: startPoint, opacity: 0}))
    const [titleAnim, setTitleAnim] = useSpring(() => ({y: 50, opacity: 0}));

    const isTitleVisible = useOnScreen(titleRef);
    const rightImage = useOnScreen(rightImageRef);

    useEffect(() => {
        rightImage && rightImageApi.start({x:0, opacity: 1, delay:250});
        isTitleVisible && setTitleAnim.start({y: 0, opacity: 1, delay: 250})
    }, [rightImage, rightImageApi, isTitleVisible, setTitleAnim])

    const AnimateNumbers = (value, reference) => {
        const isVisible = useOnScreen(reference);
        const [anim, api] = useSpring(() => ({from: {number: 0}, float: false, config: config.molasses}))

        if (isVisible) {
            api.start({to: {number:value}})
            return <animated.span>{anim.number.to(n => n.toFixed())}</animated.span>
        }
    }

    return (
        <div className={styles.statistic__background}>
            <SectionContainer>
                <animated.h2 style={titleAnim} ref={titleRef} className={styles.statistic__title}>Traffic Devs in numbers</animated.h2>
                <div className={styles.statistic__wrapper}>
                    <div className={styles.statistic__stat}>
                        <div className={styles.statistic__card}>
                            <div className={styles.statistic__card_data} ref={campaignsRef}>
                                <animated.span>{AnimateNumbers(500, campaignsRef)}</animated.span>
                                <span style={{marginLeft: '10px'}}>+</span>
                            </div>
                            <span className={styles.statistic__card_title}>new campaigns per month</span>
                        </div>
                        <div className={styles.statistic__card}>
                            <div className={styles.statistic__card_data}>
                                <animated.span ref={professionalsRef}>{AnimateNumbers(10, professionalsRef)}</animated.span>
                            </div>
                            <span className={styles.statistic__card_title}>professionals</span>
                        </div>
                        <div className={`${styles.statistic__to_right_mob} ${styles.statistic__card}`}>
                            <div className={styles.statistic__card_data}>
                                <animated.span ref={impressionsRef}>{AnimateNumbers(2, impressionsRef)}</animated.span>
                                <span style={{marginLeft: '10px'}}>bln</span>
                            </div>
                            <span className={styles.statistic__card_title}>impressions per month</span>
                        </div>
                        <div className={`${styles.statistic__to_right_mob} ${styles.statistic__card}`}>
                            <div className={styles.statistic__card_data}>
                                <animated.span ref={yearsRef}>{AnimateNumbers(3, yearsRef)}</animated.span>
                                <span style={{marginLeft: '10px'}}>years</span>
                            </div>
                            <span className={styles.statistic__card_title}>of experience</span>
                        </div>
                    </div>
                    <animated.div  style={fromRightImageAnim} ref={rightImageRef} className={styles.statistic__svg_wrapper}>
                        <StatisticSVG className={styles.statistic__svg}/>
                    </animated.div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default StatisticSection;