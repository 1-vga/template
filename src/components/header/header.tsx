import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from './images/logo.svg';
import { NavLink } from "react-router-dom";
import { SignedBlock } from '../signed-block';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    const [isSigned, setIsSigned] = useState(false);

    return <header className={styles.header}>
        <div className={styles.content}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="logo" />
            </div>
            <nav className={styles.pages}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                    Home
                </NavLink>
                <NavLink to="/labs" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                    Labs
                </NavLink>
                {
                    isSigned ? <SignedBlock />
                        : <div className={styles.signedContainer}>
                            <NavLink to="/login#personal" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                                Login
                            </NavLink>
                            <NavLink to="/signup#personal" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                                Sign up
                            </NavLink>
                        </div>
                }

            </nav>
        </div>
    </header>
}

export default Header;