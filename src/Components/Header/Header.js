import React from 'react';
import { Link } from 'react-scroll'
import styles from './Header.module.scss';
import Icons from "../Icons";

const Header = () => {
    return (
        <header className={styles.header}>
            <span>
                <Icons type='logo' width='150' height='80'/>
            </span>
            <div className={styles.header__links}>
                <Link  className={styles.header__link} to="about" spy={true} smooth={true} offset={-90} duration={500}>Who we are</Link>
                <Link  className={styles.header__link} to="topVerticals" spy={true} smooth={true} duration={500}>Top Verticals</Link>
                <Link  className={styles.header__link} to="features" spy={true} smooth={true} duration={500}>Features</Link>
                <Link  className={styles.header__link} to="sources" spy={true} smooth={true} duration={500}>Audience</Link>
            </div>
            <Link to="contactUs" spy={true} smooth={true} duration={500} className={styles.header__button}>Contact Us</Link>
        </header>
    );
};

export default Header;