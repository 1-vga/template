import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.scss';
import logo from './images/logo.png';
import whiteLogo from './images/logo.png';
import { NavLink, useLocation, Link } from "react-router-dom";
import { SignedBlock } from '../signed-block';
import classNames from 'classnames';
import isScrolledIntoView from '../../utils/isElementIntoView';

interface Props {
}

const Header: React.FC<Props> = (props) => {
    const headerRef = useRef<HTMLDivElement>(null);

    const [isSigned, setIsSigned] = useState(false);
    const [isTransparent, setTransparent] = useState(false);
    const location = useLocation();
    const isLabsPage = location.pathname === '/labs';
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const homeSection = document.getElementById('section-home');
        const labsSection = document.getElementById('section-labs');

        function watchTarget() {
            const isVisible = isScrolledIntoView(isLabsPage ? labsSection : isHomePage ? homeSection : null, {
                full: false,
                shift: window.innerHeight - Number(window.getComputedStyle(headerRef.current!).height.split('px')[0])
            });

            setTransparent(isVisible ? false : true);
        }

        if (isLabsPage || isHomePage) {
            setTransparent(true);
            window.addEventListener('scroll', watchTarget);
        } else {
            setTransparent(false);
            window.removeEventListener('scroll', watchTarget);
        }

        return () => window.removeEventListener('scroll', watchTarget);
    }, [location.pathname]);

    return <header ref={headerRef} className={classNames(styles.header, { [styles.transparent]: isTransparent })}>
        <div className={styles.content}>
            <Link to='/' className={styles.logoContainer}>
                <img src={isTransparent ? whiteLogo : logo} alt="logo" />
            </Link>
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
                            <NavLink to="/login" className={({ isActive }) => isActive ? styles.activePage : styles.page}>
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