import React from 'react';
import SectionContainer from "../../Components/SectionContainer/SectionContainer";
import styles from './InventorySection.module.scss';
import {ReactComponent as FirstInventorySVG} from "../../svg/inventory1.svg";
import {ReactComponent as SecondInventorySVG} from "../../svg/inventory2.svg";

const InventorySection = () => {
    return (
        <SectionContainer id='features'>
            <h2 className={styles.inventory__title}>traffic devs inventory</h2>
            <div className={styles.inventory}>
                <div className={styles.inventory__content}>
                    <div className={styles.inventory__content_section}>
                        <p>
                            Traffic devS is DSP built to deliver results. Powered by a unique AI algorithm, RTBsystem predicts, in real time, all possible outcomes from every single user available within the programmatic ecosystem, so the results are almost guaranteed.
                        </p>
                    </div>
                    <div>
                        <FirstInventorySVG />
                    </div>
                </div>
                <div className={styles.inventory__content}>
                    <div><SecondInventorySVG /></div>
                    <div className={styles.inventory__content_section}>
                        <p>We use Location, OS and device, Browser, Keywords and interests, Carrier, Connection type and many more to deliver to targeted audiences and drive action.</p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default InventorySection;