import React, { useEffect, useState } from 'react';
import styles from './navigation.module.scss';
import homeIcon from '../images/home.svg';
import historyIcon from '../images/history.svg';
import messageIcon from '../images/message.svg';

interface Props {
}

const Navigation: React.FC<Props> = () => {

    return <nav className={styles.tabsContainer}>
        <div className={styles.tab}>
            <div className={styles.tabImage}>
                <img src={homeIcon} alt="Dashboard" />
            </div>
            <div className={styles.tabText}>Dashboard</div>
        </div>
        <div className={styles.tab}>
            <div className={styles.tabImage}>
                <img src={historyIcon} alt="History" />
            </div>
            <div className={styles.tabText}>History</div>
        </div>
        <div className={styles.tab}>
            <div className={styles.tabImage}>
                <img src={messageIcon} alt="Appointments" />
            </div>
            <div className={styles.appointments}>
                <div className={styles.appointmentsText}>Appointments</div>
                <div className={styles.notifiactions}>6</div>
            </div>
        </div>
    </nav>
}

export default Navigation;