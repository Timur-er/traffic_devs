import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './SourceSection.module.scss';
import Icons from "../../Components/Icons";


const SourcesSection = () => {
    const width = window.innerWidth;
    let iconWidth = '140px';
    let iconHeight = '50px';

    if (width < 480) {
        iconWidth = '70';
        iconHeight = '30px'
    } else if (width < 740) {
        iconWidth = '100px';
        iconHeight = '30px'
    }
    return (
        <div className={styles.source__background}>
            <SectionContainer  id='sources'>
                <h2 className={styles.source__title}>Traffic sources</h2>
                <div className={styles.source}>
                    <div className={styles.source__image}><Icons type='mgidLogo' width={iconWidth}  height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='admixerLogo' width={iconWidth} height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='outbrainLogo' width={iconWidth} height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='phoenixLogo' width={iconWidth} height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='revcontentLogo' width={iconWidth} height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='taboolaLogo' width={iconWidth} height={iconHeight}/></div>
                    <div className={styles.source__image}><Icons type='yengoLogo' width={iconWidth} height={iconHeight}/></div>
                </div>
            </SectionContainer>
        </div>
    );
};

export default SourcesSection;