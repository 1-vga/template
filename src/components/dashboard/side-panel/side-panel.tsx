import React, { useEffect, useState } from 'react';
import styles from './side-panel.module.scss';
import logoIcon from '../images/logo.svg';

interface Props {
}

const SidePanel: React.FC<Props> = () => {

    return <div className={styles.sidePanel}>
        <div className={styles.logo}>
            <img src={logoIcon} alt="logo" />
        </div>
    </div>
}

export default SidePanel;