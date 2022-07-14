import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './SourceSection.module.scss';
import Icons from "../../Components/Icons";


const SourcesSection = () => {
    return (
        <SectionContainer  id='sources'>
          <h2 className={styles.source__title}>Traffic sources</h2>
            <div className={styles.source}>
                <div className={styles.source__image}><Icons type='mgidLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='admixerLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='outbrainLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='phoenixLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='revcontentLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='taboolaLogo' width='140px' height={'50px'}/></div>
                <div className={styles.source__image}><Icons type='yengoLogo' width='140px' height={'50px'}/></div>
            </div>
        </SectionContainer>
    );
};

export default SourcesSection;