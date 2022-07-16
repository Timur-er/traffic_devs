import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './StatisticSection.module.scss';
import { ReactComponent as StatisticSVG } from "../../svg/statistic.svg";

const StatisticSection = () => {

    return (
        <div className={styles.statistic__background}>
            <SectionContainer>
                <h2 className={styles.statistic__title}>Traffic Devs in numbers</h2>
                <div className={styles.statistic__wrapper}>
                    <div className={styles.statistic__stat}>
                        <div className={styles.statistic__card}>
                            <span className={styles.statistic__card_data}>500+</span>
                            <span className={styles.statistic__card_title}>new campaigns per month</span>
                        </div>
                        <div className={styles.statistic__card}>
                            <span className={styles.statistic__card_data}>10</span>
                            <span className={styles.statistic__card_title}>professionals</span>
                        </div>
                        <div className={`${styles.statistic__to_right_mob} ${styles.statistic__card}`}>
                            <span className={styles.statistic__card_data}>2 bln</span>
                            <span className={styles.statistic__card_title}>impressions per month</span>
                        </div>
                        <div className={`${styles.statistic__to_right_mob} ${styles.statistic__card}`}>
                            <span className={styles.statistic__card_data}>3 years</span>
                            <span className={styles.statistic__card_title}>of experience</span>
                        </div>
                    </div>
                    <div className={styles.statistic__svg_wrapper}>
                        <StatisticSVG className={styles.statistic__svg}/>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default StatisticSection;