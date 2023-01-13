import React, { useEffect, useState } from 'react';
import styles from './admin-dashboard.module.scss';
import { CreateAppointment, SidePanel } from '../../components/dashboard';
import { IndicationCard } from '../../components/dashboard/indication-card';
import { INDICATION_IMAGE } from '../../components/dashboard/types';

interface Props {
}

const AdminDashboard: React.FC<Props> = () => {

    return <div className={styles.adminDashboard}>
        <SidePanel />
        <div className={styles.content}>
            <CreateAppointment />
            <section className={styles.dataSection}>
                <div className={styles.indicationsContainer}>
                    <IndicationCard
                        type={INDICATION_IMAGE.APPOINTMENTS}
                        image={ }
                    />
                </div>
            </section>
        </div>
    </div>
}

export default AdminDashboard;