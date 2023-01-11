import React, { useEffect, useState } from 'react';
import styles from './profile-appointment-row.module.scss';
import { ProfileAppointmentRow as RowInterface } from '../../types';
import classNames from 'classnames';

interface Props {
    data: RowInterface
}

const ProfileAppointmentRow: React.FC<Props> = ({ data }) => {
    return <div className={classNames(styles.cell, styles.profileAppointmentRow)}>
        <div className={classNames(styles.cell, styles.boldText)}>{data.name}</div>
        <div className={classNames(styles.cell, styles.boldText)}>{data.name2}</div>
        <div className={classNames(styles.cell, styles.text)}>{data.date}</div>
        <div className={classNames(styles.cell, styles.payment)}>
            <div className={styles.iconContainer}>
                <img src="" alt="payment-icon" />
            </div>
            <div className={styles.text}>{data.payment}</div>
        </div>
        <div className={classNames(styles.cell, styles.text)}>{data.fees}</div>
        <div className={classNames(styles.cell, styles.status)}>
            <div className={styles.statusCircle}></div>
            <div className={styles.text}>{data.status}</div>
        </div>
    </div>
}

export default ProfileAppointmentRow;