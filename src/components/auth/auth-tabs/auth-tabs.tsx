import React from 'react';
import styles from './auth-tabs.module.scss';

interface Props {
}

const AuthTabs: React.FC<Props> = (props) => {
    return <div className={styles.authTabs}>
        auth tabs
    </div>
}

export default AuthTabs;