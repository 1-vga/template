
import React, { useState, useEffect } from 'react';
import styles from './labs-page.module.scss';
import Subscribe from '../../components/subscribe/subscribe'
import { Search } from '../../components/search';
import { CardLab } from '../../components/card-lab';
import photo from './images/roundedRectangle.jpg'
import photoTwo from "./images/roundedRectangleTwo.jpg";
import photoThree from "./images/roundedRectangleThree.jpg";
import { Filters } from '../../components/filters';
import { Pagination } from '../../components/pagination';
import { PREV_PATH } from '../../constants';

interface Props {
}

const LabsPage: React.FC<Props> = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        localStorage.setItem(PREV_PATH, 'Labs');
    }, []);

    return <div className={styles.labsPage}>
        <section className={styles.sectionTop}>
            <Search title='labs' />
        </section>
        <section id='section-labs' className={styles.sectionBottom}>
            <Filters />
            <div className={styles.bottomContent}>
                <h2 className={styles.title}>Search results <span>(all)</span></h2>
                <div className={styles.cards}>
                    <CardLab id='1' photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab id='2' photo={photoTwo} name='BOSANES' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab id='1' photo={photo} name='EUROFARM' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                    <CardLab id='3' photo={photoThree} name='ORTHOS' location='Ozrakovići bb' time='Mon-Sun: 10:00 - 18:00' tell='+387 32 732 100' website='eurofarm.ba' />
                </div>
                <Pagination itemsPerPage={1} />
            </div>
        </section>
        <Subscribe />
    </div>
}

export default LabsPage;