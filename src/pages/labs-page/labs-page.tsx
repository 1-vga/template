
import React, { useState } from 'react';
import styles from './labs-page.module.scss';

import Subscribe from '../../components/subscribe/subscribe'
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Search } from '../../components/search';
import { Filters } from '../../components/filters';
import { CardLab } from '../../components/card-lab';
import photo from './images/roundedRectangle.jpg'
import photoTwo from "./images/roundedRectangleTwo.jpg";
import photoThree from "./images/roundedRectangleThree.jpg";

interface Props {
}

const LabsPage: React.FC<Props> = (props) => {
    return <div className={styles.labsPage}>
        <section className={styles.sectionTop}>
            <Search title='labs' />
        </section>
        <section className={styles.sectionBottom}>
            <Filters />
            <div className={styles.bottomContent}>
                <h2 className={styles.title}>Search results <span>(all)</span></h2>
                <div className={styles.cards}>
                    <CardLab photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                </div>
            </div>
        </section>
        <Subscribe />
    </div>
}

export default LabsPage;