import React, {useEffect, useRef} from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import Icons from "../../Components/Icons";
import styles from './TopVerticalsSection.module.scss';
import {ReactComponent as TopVerticalsSVG} from "../../svg/top_verticals.svg";
import {useSpring, animated} from "react-spring";
import useOnScreen from "../../hooks/useOnScreen.hook";

const TopVerticalsSection = () => {
    const titleRef = useRef();
    const imageRef = useRef();
    const cardsRef = useRef();

    const [titleAnim, setTitleAnim] = useSpring(() => ({y:50, opacity: 0}));
    const [imageAnim, setImageAnim] = useSpring(() => ({x: 200, opacity: 0}))
    const [cardsAnim, setCardsAnim] = useSpring(() => ({y:50, opacity: 0}));

    const isTitleVisible = useOnScreen(titleRef);
    const isImageVisible = useOnScreen(imageRef);
    const isCardsVisible = useOnScreen(cardsRef)

    useEffect(() => {
        isTitleVisible && setTitleAnim.start({y: 0, opacity: 1, delay: 250});
        isImageVisible && setImageAnim.start({x: 0, opacity: 1, delay: 250});
        isCardsVisible && setCardsAnim.start({y: 0, opacity: 1, delay: 250})
    }, [setTitleAnim, isTitleVisible, isImageVisible, setImageAnim, isCardsVisible, setCardsAnim])

    const width = window.innerWidth;
    let iconWidth = '80px';
    let iconHeight = '60px';

    if (width < 823) {
        iconWidth = '60px';
        iconHeight = '50px'
    }

    const topVerticals = [
        {
            name: 'native to search',
            icon: 'eyeIcon'
        },
        {
            name: 'gaming',
            icon: 'gamingIcon'
        },
        {
            name: 'financials services',
            icon: 'financeIcon'
        },
        {
            name: 'dropshipping',
            icon: 'dropshippingIcon'
        },
        {
            name: 'style and fashion',
            icon: 'styleIcon'
        },
        {
            name: 'health and wellness',
            icon: 'healthIcon'
        },
        {
            name: 'ecommerce',
            icon: 'ecommerceIcon'
        },
        {
            name: 'automotive',
            icon: 'automotiveIcon'
        }

    ]



    const renderCards = topVerticals.map(vertical => {
        const {name, icon} = vertical;

        return (
            <div key={name} className={styles.card}>
                <div className={styles.card__iconContainer}>
                    <div className={styles.card__icon}>
                        <Icons type={icon} width={iconWidth} height={iconHeight}/>
                    </div>
                </div>
                <span className={styles.card__text}>
                    {name}
                </span>
            </div>
        )
    })

    return (
        <div className={styles.verticals__background}>
            <SectionContainer id='topVerticals'>
                    <animated.h2 style={titleAnim} ref={titleRef} className={styles.verticals__title}>Top Verticals</animated.h2>
                <div className={styles.verticals}>
                    <animated.div style={cardsAnim} ref={cardsRef} className={styles.verticals__icons}>
                        {renderCards}
                    </animated.div>
                    <animated.div style={imageAnim} ref={imageRef} className={styles.verticals__svg_wrapper}>
                        <TopVerticalsSVG className={styles.verticals__svg}/>
                    </animated.div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default TopVerticalsSection;