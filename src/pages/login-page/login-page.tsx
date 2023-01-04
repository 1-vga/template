import React, { useState } from 'react';
import styles from './login-page.module.scss';
import { AuthGreeting, AuthNetworks, AuthTabs } from '../../components/auth';
import { useLocation } from 'react-router-dom';
import { LoginPersonal } from '../../components/auth';
import { LoginLabs } from '../../components/auth';

interface Props {
}

const LoginPage: React.FC<Props> = (props) => {
  const location = useLocation();

  const loginPersonalFields = location.pathname === '/login' && location.hash === '#personal';
  const loginLabsFields = location.pathname === '/login' && location.hash === '#lab'

  return <div className={styles.loginPage}>
    <AuthGreeting title='Welcome back!' subtitle='Login from below' />
    <AuthTabs leftTab='Personal' rightTab='Lab' />
    {loginPersonalFields && <LoginPersonal />}
    {loginLabsFields && <LoginLabs />}
    <AuthNetworks />
  </div>
}

export default LoginPage;