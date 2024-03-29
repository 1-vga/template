import React, { useEffect, useState } from 'react';
import styles from './navigation.module.scss';
import homeIcon from '../images/home.svg';
import historyIcon from '../images/history.svg';
import messageIcon from '../images/message.svg';
import { Link, useLocation } from "react-router-dom";
import classNames from 'classnames';

interface Props {
}

const Navigation: React.FC<Props> = () => {
    const location = useLocation();

    return <nav className={styles.tabsContainer}>
        <Link
            to={`${location.pathname}#dashboard`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#dashboard' })}
        >
            <div className={styles.tabImage}>
                <img src={homeIcon} alt="Dashboard" />
            </div>
            <div className={styles.tabText}>Dashboard</div>
        </Link>
        <Link
            to={`${location.pathname}#history`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#history' })}
        >
            <div className={styles.tabImage}>
                <img src={historyIcon} alt="History" />
            </div>
            <div className={styles.tabText}>History</div>
        </Link>
        <Link
            to={`${location.pathname}#appointments`}
            className={classNames(styles.tab, { [styles.active]: location.hash === '#appointments' })}
        >
            <div className={styles.tabImage}>
                <img src={messageIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Appointments</div>
                <div className={styles.notifiactions}>6</div>
            </div>
        </Link>
    </nav>
}

export default Navigation;