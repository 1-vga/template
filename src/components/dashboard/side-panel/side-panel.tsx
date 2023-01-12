import React, { useEffect, useState } from 'react';
import styles from './side-panel.module.scss';
import logoIcon from '../images/logo.svg';
import { Navigation } from '../navigation';
import profileIcon from '../images/profile.svg';
import logIcon from '../images/log.svg';

interface Props {
}

const SidePanel: React.FC<Props> = () => {

    return <div className={styles.sidePanel}>
        <div className={styles.top}>
            <div className={styles.logo}>
                <img src={logoIcon} alt="logo" />
            </div>
            <Navigation />
        </div>
        
        <div className={styles.bottom}>
            <div className={styles.item}>
                <div className={styles.itemImage}>
                    <img src={profileIcon} alt="Account" />
                </div>
                <div className={styles.itemText}>Account</div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemImage}>
                    <img src={logIcon} alt="Logout" />
                </div>
                <div className={styles.itemText}>Logout</div>
            </div>
        </div>
    </div>
}

export default SidePanel;