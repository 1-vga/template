import React, { useState } from 'react';
import styles from './signed-block.module.scss';
import bellIcon from './images/bell.svg';
import bellGrey from './images/bellGrey.svg';
import avatarIcon from './images/avatar.svg';
import arrow from './images/arrow.svg';

interface Props {
}

const SignedBlock: React.FC<Props> = (props) => {
    const [areOpenNotifications, setAreOpenNotifications] = useState(false);

    const toggleNotifications = () => {
        setAreOpenNotifications(!areOpenNotifications);
    }

    const handleLogOut = () => {}

    return <div className={styles.signedBlock}>
        <div className={styles.imgContainer}>
            <img src={bellGrey} alt="notifications" />
        </div>
        <div onClick={toggleNotifications} className={styles.userContainer}>
            <div className={styles.avatarContainer}>
                <img src={avatarIcon} alt="avatar" />
            </div>
            <div className={styles.name}>Sawan J.</div>
            <div className={styles.arrow}>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <button className={styles.button} onClick={handleLogOut}>Log out</button>
    </div>
}

export default SignedBlock;