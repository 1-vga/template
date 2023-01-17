import React, { useEffect, useState } from 'react';
import styles from './patient-dashboard.module.scss';
import { CreateAppointment, SidePanel } from '../../components/dashboard';
import { Table } from '../../components/table';
import { TABLE } from '../../components/types';
import { columnsAppointment, rowsAppointment } from '../../moc-data/dataDashboard';
import { useLocation } from 'react-router-dom';

interface Props {
}

const PatientDashboard: React.FC<Props> = () => {
    const location = useLocation();

    return <div className={styles.adminDashboard}>
        <SidePanel />
        <div className={styles.content}>
            <CreateAppointment />
            <section className={styles.dataSection}>
                <div className={styles.row}>
                    {
                        location.hash === '#dashboard'
                        && <h2 className={styles.title}>Upcoming Appoitnments</h2>
                    }
                    {
                        location.hash === '#history'
                        && <h2 className={styles.title}>Past Appointments</h2>
                    }
                    {
                        location.hash === '#appointments'
                        && <h2 className={styles.title}>Your Appointments</h2>
                    }
                    <div className={styles.rowAction}>Show all</div>
                </div>
                <Table
                    type={TABLE.DASHBOARD_ADMIN}
                    columnTitles={columnsAppointment}
                    rows={rowsAppointment}
                    heading='All Appointments'
                />
            </section>
        </div>
    </div>
}

export default PatientDashboard;