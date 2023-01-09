import React from 'react';
import styles from './appoint.module.scss'
import avatar from './images/photo.png'
import tell from './images/phone.svg'
import time from './images/time.svg'
import calendar from './images/calendar.svg'
interface Props {

}

const Appoint: React.FC<Props> = () => {
    return <div className={styles.popUpContainer}>
        <div className={styles.titleBox}>
            <div className={styles.title}>Appointment details</div>
            <div className={styles.postponed}>Postponed</div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.infoBox}>
            <div className={styles.row}>
                <div className={styles.col50}>
                    <div className={styles.infotitle}>
                        Patient Information
                    </div>
                    <div className={styles.patientInfo}>
                        <div className={styles.photoImg}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={styles.patientInfoCol}>
                            <div className={styles.title}>Theresa Webb</div>
                            <div className={styles.pcrTest}>PCR Test</div>
                        </div>
                    </div>
                    <button className={styles.callPatient}><div className={styles.tellImg}><img src={tell} alt="tell" /></div><div>Call the Patient</div></button>
                </div>
                <div className={styles.col50}>
                    <div className={styles.infotitleR}>
                        DATE AND TIME
                    </div>
                    <div className={styles.dateInfo}>
                        <div className={styles.patientDateCol}>
                            <div className={styles.dateCol50}>
                                <div className={styles.svg}><img src={time} alt="time" /></div>

                                <div className={styles.calendarTitle}>11:00 - 12:00</div>
                            </div>
                            <div className={styles.dateCol50}>
                                <div className={styles.svg}><img src={calendar} alt="calendar" /></div>
                                <div className={styles.calendarTitle}>Feb 15, 2020</div></div>
                        </div>
                        <div className={styles.buttonApp}><button className={styles.callAppoint}>Cancel Appointment</button></div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Appoint;