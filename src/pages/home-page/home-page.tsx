import React from 'react';
import styles from './home-page.module.scss';
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
}

const HomePage: React.FC<Props> = (props) => {
    return <div className={styles.homePage}>
        HomePage
    </div>
}

export default HomePage;