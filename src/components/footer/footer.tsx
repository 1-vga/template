import React from 'react';
import styles from './footer.module.scss';
import logo from './images/logo.svg';

interface Props {
}

const Footer: React.FC<Props> = (props) => {
    return <footer className={styles.footer}>
        <div className={styles.logoContainer}>
            <img src={logo} alt="logo" />
        </div>
        <div className={styles.separator}/>
        <div className={styles.itemsContainer}>
            <div className={styles.item}>Home</div>
            <div className={styles.item}>About Us</div>
            <div className={styles.item}>Agency Services</div>
            <div className={styles.item}>Staff Services</div>
        </div>
    </footer>
}

export default Footer;