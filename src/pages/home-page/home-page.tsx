import React from 'react';
import styles from './home-page.module.scss';
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
}

const HomePage: React.FC<Props> = (props) => {
    return <div className={styles.homePage}>
        <section className={styles.sectionTop}>
            <div className={styles.topContent}>
                <h1 className={styles.topHeading}>stay checked...</h1>
            </div>
        </section>
    </div>
}

export default HomePage;