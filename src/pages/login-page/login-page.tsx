import React from 'react';
import styles from './login-page.module.scss';
import logo from './images/logo.svg';
import { AuthGreeting, AuthTabs } from '../../components/auth';

interface Props {
}

const LoginPage: React.FC<Props> = (props) => {
    return <div className={styles.loginPage}>
        <AuthGreeting title='Welcome back!' subtitle='Login from below' />
        <AuthTabs />
    </div>
}

export default LoginPage;