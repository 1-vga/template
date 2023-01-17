import React, { useEffect, useState } from 'react';
import styles from './appoint-popup.module.scss';
import avatar from './images/photo.png';
import tell from './images/phone.svg';
import time from './images/time.svg';
import calendar from './images/calendar.svg';
import { useLocation } from 'react-router-dom';

interface Props {
}

const AppointPopup: React.FC<Props> = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [status, setStatus] = useState('');

    useEffect(() => {
        location.pathname === '/admin-dashboard' && setStatus('Postponed');
        location.pathname === '/patient-dashboard' && setStatus('Confirmed');
        // TODO code below must be replaced
        // request to server
        // setIsLoading(false);
    }, []);

    return <div className={styles.popupContainer}>
        <div className={styles.titleBox}>
            <div className={styles.title}>Appointment details</div>
            <div data-status={status} className={styles.status}>{status}</div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.infoBox}>
            <div className={styles.row}>
                <div className={styles.column}>

                    {
                        location.pathname === '/admin-dashboard' ?
                            <>
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
                            </>
                            :
                            <>
                                <div className={styles.infotitle}>
                                    TEST NAME
                                </div>
                                <div className={styles.infoSubtitle}>
                                    PCR Test
                                </div>
                            </>
                    }
                    <button className={styles.callPatient}>
                        <div className={styles.tellImg}>
                            <img src={tell} alt="tell" />
                        </div>
                        <div>Call the Patient</div>
                    </button>
                </div>
                <div className={styles.column}>
                    <div className={styles.infotitle}>
                        DATE AND TIME
                    </div>
                    <div className={styles.dateInfo}>
                        <div className={styles.patientDateCol}>
                            <div className={styles.date}>
                                <div className={styles.svg}><img src={time} alt="time" /></div>
                                <div className={styles.calendarTitle}>11:00 - 12:00</div>
                            </div>
                            <div className={styles.date}>
                                <div className={styles.svg}><img src={calendar} alt="calendar" /></div>
                                <div className={styles.calendarTitle}>Feb 15, 2020</div>
                            </div>
                        </div>
                        <button className={styles.buttonCancel}>Cancel Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AppointPopup;