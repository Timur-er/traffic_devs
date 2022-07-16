import React from 'react';
import styles from './WavesTitle.module.scss';

const WavesTitle = ({title}) => {
    return (
        <div>
            <h2 className={`${styles.waves__title} ${styles.waves__out}`}>{title}</h2>
            <h2 className={`${styles.waves__title} ${styles.waves__wave}`}>{title}</h2>
        </div>
    );
};

export default WavesTitle;