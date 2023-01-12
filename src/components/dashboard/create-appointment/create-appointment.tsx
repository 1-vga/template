import React, { useEffect, useState } from 'react';
import styles from './create-appointment.module.scss';
import addIcon from '../images/add.svg';

interface Props {
}

const CreateAppointment: React.FC<Props> = () => {

    return <div className={styles.createAppointment}>
        <h1 className={styles.title}>Dashboard</h1>
        <button className={styles.button}>
            <div className={styles.buttonImage}>
                <img src={addIcon} alt="add" />
            </div>
            <div className={styles.buttonText}></div>
        </button>
    </div>
}

export default CreateAppointment;