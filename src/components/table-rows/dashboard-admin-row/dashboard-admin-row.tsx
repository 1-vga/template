import React, { useEffect, useState } from 'react';
import styles from './dashboard-admin-row.module.scss';
import { Row } from '../../types';
import classNames from 'classnames';
import cardIcon from '../images/card.svg';

interface Props {
    data: Row;
    cellWidth: number;
    setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardAdminRow: React.FC<Props> = ({ data, cellWidth, setPopup }) => {
    // const [popup, setPopup] = useState({isOpen: false, id: ''});
    const handleClick = () => {
        setPopup && setPopup(true);

        console.log('id', data.id);
    }

    return <div className={styles.profileAppointmentRow}>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.patient)}>
            <div className={styles.avatar}>
                <img src={data.photo} alt={`${data.firstName} ${data.lastName}`} />
            </div>
            <div className={styles.credentials}>{data.firstName} {data.lastName}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.date}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.boldText)}>
            {data.name}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            {data.fees}
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.status)}>
            <div data-status={data.status} className={styles.statusCircle}></div>
            <div className={styles.text}>{data.status}</div>
        </div>
        <div style={{ width: `${cellWidth}%` }} className={classNames(styles.cell, styles.text)}>
            <button className={styles.button} onClick={handleClick}>View Details</button>
        </div>
    </div>
}

export default DashboardAdminRow;