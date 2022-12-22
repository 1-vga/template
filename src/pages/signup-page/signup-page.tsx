import React from 'react';
import styles from './signup-page.module.scss';
import { AuthGreeting, AuthNetworks, AuthTabs } from '../../components/auth';

interface Props {
}

const SignUpPage: React.FC<Props> = (props) => {
    return <div className={styles.signUpPage}>
        <AuthGreeting title='Create your account' subtitle='It’s free and easy' />
        <AuthTabs leftTab='Personal' rightTab='Institution' />
        <AuthNetworks />
    </div>
}

export default SignUpPage; 