
import React, { useState } from 'react';
import styles from './labs-page.module.scss';

import Subscribe from '../../components/subscribe/subscribe'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Search } from '../../components/search';

interface Props {
}

const LabsPage: React.FC<Props> = (props) => {
    return <div className={styles.labsPage}>
        <section className={styles.sectionTop}>
            <Search title='labs'/>
        </section>
        <Subscribe />
    </div>
}

export default LabsPage;