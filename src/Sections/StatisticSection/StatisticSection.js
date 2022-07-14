import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './StatisticSection.module.scss';
import { ReactComponent as StatisticSVG } from "../../svg/statistic.svg";

const StatisticSection = () => {

    const statistics = [
        {
            statistic: '500+',
            title: 'new campaigns per month'
        },
        {
            statistic: '10',
            title: 'professionals'
        },
        {
            title: 'impressions per month',
            statistic: '2 bln'
        },
        {
            statistic: '3 years',
            title: 'of experience'
        }
    ]

    const renderStatistic = statistics.map(stat => {
        const {statistic, title} = stat;
        return (
            <div className={styles.statistic__card}>
                <span className={styles.statistic__card_data}>{statistic}</span>
                <span className={styles.statistic__card_title}>{title}</span>
            </div>
        )
    })

    return (
        <SectionContainer>
                <h2 className={styles.statistic__title}>Traffic Devs in numbers</h2>
            <div className={styles.statistic__wrapper}>
                <div className={styles.statistic__stat}>
                    {renderStatistic}
                </div>
                <div>
                    <StatisticSVG />
                </div>
            </div>
        </SectionContainer>
    );
};

export default StatisticSection;