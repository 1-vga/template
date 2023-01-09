
import React, { useState } from 'react';
import styles from './home-page.module.scss';
import { CardLab } from '../../components/card-lab';
import Subscribe from '../../components/subscribe/subscribe'
import photo from './images/roundedRectangle.jpg'
import photoTwo from "./images/roundedRectangleTwo.jpg";
import photoThree from "./images/roundedRectangleThree.jpg";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Search } from '../../components/search';

interface Props {
}

const HomePage: React.FC<Props> = (props) => {
    const location = useLocation();

    return <div className={styles.homePage}>
        <section className={styles.sectionTop}>
            <Search title='Stay checked...'/>
        </section>
        <section className={styles.sectionBottom}>
        <section id='section-home' className={styles.sectionBottom}>
            <h1 className={styles.service}>BEST SERVICES</h1>
            <h2 className={styles.title}>We recommend</h2>
            <div className={styles.recommendContent}>
                <CardLab photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                <CardLab photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                <CardLab photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
            </div>
            <div className={styles.offers}>
                <h2 className={styles.title}>Special offers</h2>
                <div className={styles.offersContent}>
                    <CardLab photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab photo={photoTwo} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab photo={photoThree} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                </div>
            </div>
        </section>
        <Subscribe />
    </div>
}

export default HomePage;