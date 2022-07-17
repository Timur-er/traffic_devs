import React, {useState} from 'react';
import {Link} from 'react-scroll'
import styles from './Header.module.scss';
import Icons from "../Icons";
import {useNavigate} from "react-router-dom";
import {MAIN} from "../../routes/const";


const Header = () => {
    const nav = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const topClassName = isMenuOpen ? `${styles.burger__top} ${styles.burger__open_top}` : `${styles.burger__top}`;
    const middleClassName = isMenuOpen ? `${styles.burger__middle} ${styles.burger__open_middle}` : `${styles.burger__middle}`;
    const bottomClassName = isMenuOpen ? `${styles.burger__bottom} ${styles.burger__open_bottom}` : `${styles.burger__bottom}`;

    const linksListClassName = isMenuOpen ? `${styles.header__links_open} ${styles.header__links}` : `${styles.header__links}`;

    const toggleBtn = () => {
        setIsMenuOpen(!isMenuOpen)
        nav(MAIN);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__links_wrapper}>
            <span>
                <Icons type='logo' width='150' height='80'/>
            </span>
                <ul className={linksListClassName}>
                    <li className={styles.header__link_wrapper}>
                        <Link onClick={toggleBtn} className={styles.header__link} to="about" spy={true} smooth={true}
                              offset={-90}
                              duration={500}>Who we are</Link>
                    </li>
                    <li className={styles.header__link_wrapper}>
                        <Link onClick={toggleBtn} className={styles.header__link} to="topVerticals" spy={true}
                              offset={-90}
                              smooth={true} duration={500}>Top
                            Verticals</Link>
                    </li>
                    <li className={styles.header__link_wrapper}>
                        <Link onClick={toggleBtn} className={styles.header__link} to="features" spy={true} smooth={true}
                              offset={-90}
                              duration={500}>Why us?</Link>
                    </li>
                    <li className={styles.header__link_wrapper}>
                        <Link onClick={toggleBtn} className={styles.header__link} to="sources" spy={true} smooth={true}
                              offset={-90}
                              duration={500}>Sources</Link>
                    </li>
                </ul>
            </div>
            <Link to="contactUs" spy={true} smooth={true} duration={500} className={styles.header__button}>Contact
                Us</Link>

            <div className={styles.burger} onClick={toggleBtn}>
                <div className={topClassName}/>
                <div className={middleClassName}/>
                <div className={bottomClassName}/>
            </div>

        </header>
    );
};

export default Header;