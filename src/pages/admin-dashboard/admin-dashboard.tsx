import React, { useEffect, useState } from 'react';
import styles from './admin-dashboard.module.scss';
import { CreateAppointment, SidePanel } from '../../components/dashboard';

interface Props {
}

const AdminDashboard: React.FC<Props> = () => {

    return <div className={styles.adminDashboard}>
        <SidePanel />
        <div className={styles.content}>
            <CreateAppointment />
            <div style={{height: '1000px'}}></div>
        </div>
    </div>
}

export default AdminDashboard;