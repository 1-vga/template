import React, { useState } from 'react';
import styles from './lab-page.module.scss';
import {Subscribe} from '../../components/subscribe';

interface Props {
}

const LabPage: React.FC<Props> = () => {

    return <div className={styles.labPage}>

        <div className={styles.cotentContainer}>
            <section className={styles.content}></section>
            <section className={styles.phoneSection}></section>
        </div>
        <Subscribe/>
    </div>
}

export default LabPage;