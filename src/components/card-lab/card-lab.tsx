import React from 'react';
import styles from './card-lab.module.scss'
import svgLocation from '../../components/card-lab/images/svg/locationImg.svg'
import svgTime from '../../components/card-lab/images/svg/timeImg.svg'
import svgTell from '../../components/card-lab/images/svg/tellImg.svg'
import svgWebsite from '../../components/card-lab/images/svg/websiteImg.svg'
import { Link } from 'react-router-dom';

interface Props {
    name: string;
    location: string;
    time: string;
    tell: string;
    website: string;
    photo: string;
    id: string;
}

const CardLab: React.FC<Props> = ({ name, location, time, tell, website, photo, id }) => {
    return <div className={styles.cardContainer}>
        {/* <h1>{id}</h1> */}
        <div className={styles.imgContainer}>
            <img src={photo} alt="photo" />
        </div>
        <div className={styles.contentContainer}>
            <h2 className={styles.cardTitle}>{name}</h2>
            <ul className={styles.cardText}>
                <li className={styles.textItem}><span><img className={styles.svg} src={svgLocation} alt="location" /></span>{location}</li>
                <li className={styles.textItem}><span><img className={styles.svg} src={svgTime} alt="time" /></span>{time}</li>
                <li className={styles.textItem}><span><img className={styles.svg} src={svgTell} alt="tell" /></span>{tell}</li>
                <li className={styles.textItem}><span><img className={styles.svg} src={svgWebsite} alt="website" /></span>{website}</li>
            </ul>
            <Link to={`/${id}`} className={styles.button}>Call Now</Link>
        </div>
    </div>
}

export default CardLab;