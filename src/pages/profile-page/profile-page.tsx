import React from 'react';
import styles from './profile-page.module.scss';
import avatar from './images/avatar.png';
import { Table } from '../../components/table';
import { rows } from '../../dataProfile';

interface Props {
}

const ProfilePage: React.FC<Props> = (props) => {

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
       <h2 className={styles.heading}>Upcoming appointments</h2>
       <Table 
       heading='New Appointments' 
       columnTitles={['test name', 'test name', 'date', 'payment method', 'fees', 'meeting status']} 
       rows={rows}
    //    emptyColumns={4}
       />
    </div>
}

export default ProfilePage; 