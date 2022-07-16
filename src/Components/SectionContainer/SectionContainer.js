import React from 'react';
import styles from './SectionContainer.module.scss';

const SectionContainer = ({children, id}) => {
    return (
        <section id={id} className={styles.container}>
            {children}
        </section>
    );
};

export default SectionContainer;