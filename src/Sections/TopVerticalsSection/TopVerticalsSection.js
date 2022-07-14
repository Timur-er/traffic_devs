import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import Icons from "../../Components/Icons";
import styles from './TopVerticalsSection.module.scss';
import {ReactComponent as TopVerticalsSVG} from "../../svg/top_verticals.svg";

const TopVerticalsSection = () => {

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
            <div className={styles.card}>
                <div className={styles.card__iconContainer}>
                    <div className={styles.card__icon}>
                        <Icons type={icon} width='80px' height='60px'/>
                    </div>
                        <div className={styles.card__green_line} />
                </div>
                <span className={styles.card__text}>
                    {name}
                </span>
            </div>
        )
    })

    return (
        <SectionContainer id='topVerticals'>
            <h2 className={styles.vertical_section__title}>Top Verticals</h2>
            <div className={styles.vertical_section}>
                <div className={styles.vertical_section__icons}>
                    {renderCards}
                </div>
                <div>
                    <TopVerticalsSVG />
                </div>
            </div>
        </SectionContainer>
    );
};

export default TopVerticalsSection;