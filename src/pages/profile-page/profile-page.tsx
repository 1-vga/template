import React, { useState } from 'react';
import styles from './profile-page.module.scss';
import avatar from './images/avatar.png';
import { Table } from '../../components/table';
import { rowsAppointment, columnsAppointment, columnsFindings, rowsFindings } from '../../moc-data/dataProfile';
import { TABLE } from '../../components/types';
import { ResultPopup } from '../../components/result-popup';
import { Link } from 'react-router-dom';

interface Props {
}

const ProfilePage: React.FC<Props> = (props) => {
    const [popup, setPopup] = useState(false); //TODO 1)id of the clicked row. 2) fetch data inside popup with id

    return <div className={styles.profilePage}>
        <section className={styles.topSection}>
            <div className={styles.imgContainer}>
                <img src={avatar} alt="avatar" />
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.title}>Sawan Jeremi</h1>
                <div className={styles.subtitle}>sawan.jeremi@gmail.com</div>
                <div className={styles.subtitle}>+39213547980</div>
                <div className={styles.subtitle}>Street 51, New York</div>
            </div>
        </section>
        <div className={styles.tableContainer}>
            <h2 className={styles.heading}>Upcoming appointments</h2>
            <Table
                type={TABLE.PROFILE_APPOINTMENT}
                columnTitles={columnsAppointment}
                rows={rowsAppointment}
            />
            <Link to='/appointments' className={styles.button}>See all</Link>
        </div>
        <div className={styles.tableContainer}>
            <h2 className={styles.heading}>History</h2>
            <Table
                type={TABLE.PROFILE_APPOINTMENT}
                columnTitles={columnsAppointment}
                rows={rowsAppointment}
            />
            <Link to='/appointments' className={styles.button}>See all</Link>
        </div>
        <div className={styles.tableContainer}>
            <h2 className={styles.heading}>Medical findings</h2>
            <Table
                type={TABLE.PROFILE_FINDINGS}
                columnTitles={columnsFindings}
                rows={rowsFindings}
                setPopup={setPopup}
            />
            <Link to='/findings' className={styles.button}>See all</Link>
        </div>
        {popup && <ResultPopup setPopup={setPopup} />}
    </div>
}

export default ProfilePage; 