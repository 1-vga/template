
import React, { useState } from 'react';
import styles from './home-page.module.scss';
import CardBest from '../../components/card/card-best';
import Subscribe from '../../components/subscribe/subscribe'
import photo from './images/roundedRectangle.jpg'
import photoTwo from "./images/roundedRectangleTwo.jpg";
import photoThree from "./images/roundedRectangleThree.jpg";
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const location = useLocation();

    return <div className={styles.homePage}>
        <section className={styles.sectionTop}>
            <div className={styles.topContent}>
                <h1 className={styles.topHeading}>stay checked...</h1>
            </div>
        </section>
        <section className={styles.sectionBottom}>
            <div className={styles.container}>
                <h1 className={styles.service}>BEST SERVICES</h1>
                <h2 className={styles.recommendHeading}>We recommend</h2>
                <div className={styles.recommendContent}>

                    <CardBest photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />

                    <CardBest photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />

                    <CardBest photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />

                </div>
                <div className={styles.offers}>
                    <h2 className={styles.offersHeading}>Special offers</h2>
                    <div className={styles.offersContent}>
                        
                        <CardBest photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />

                        <CardBest photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />

                        <CardBest photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.subscribe}>
            <Subscribe />
        </section>
    </div>
}

export default HomePage;