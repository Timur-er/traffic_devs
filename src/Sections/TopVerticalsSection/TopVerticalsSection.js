import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import Icons from "../../Components/Icons";
import styles from './TopVerticalsSection.module.scss';
import {ReactComponent as TopVerticalsSVG} from "../../svg/top_verticals.svg";

const TopVerticalsSection = () => {
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
                    <h2 className={styles.verticals__title}>Top Verticals</h2>
                <div className={styles.verticals}>
                    <div className={styles.verticals__icons}>
                        {renderCards}
                    </div>
                    <div className={styles.verticals__svg_wrapper}>
                        <TopVerticalsSVG className={styles.verticals__svg}/>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default TopVerticalsSection;