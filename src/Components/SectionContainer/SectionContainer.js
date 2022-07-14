import React from 'react';
import styles from './SectionContainer.module.scss';

const SectionContainer = ({children, id}) => {
    return (
        <div id={id} className={styles.container}>
            {children}
        </div>
    );
};

export default SectionContainer;