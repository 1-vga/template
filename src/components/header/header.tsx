import React from 'react';
import styles from './header.module.scss';
import logo from './images/logo.svg';
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

interface Props {
}

const Header: React.FC<Props> = (props) => {
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
                <NavLink to="/login" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                    Login
                </NavLink>
                <NavLink to="/signup" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
                    Sign up
                </NavLink>
            </nav>
        </div>
    </header>
}

export default Header;