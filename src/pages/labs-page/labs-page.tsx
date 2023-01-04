
import React, { useState } from 'react';
import styles from './labs-page.module.scss';

import Subscribe from '../../components/subscribe/subscribe'
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
}

const LabsPage: React.FC<Props> = (props) => {
    return <div className={styles.labsPage}>
        <section className={styles.sectionTop}>
            <div className={styles.topContent}>
                <h1 className={styles.topHeading}>stay checked...</h1>
            </div>
        </section>
        <section className={styles.subscribe}>
            <Subscribe />
        </section>
    </div>
}

export default LabsPage;