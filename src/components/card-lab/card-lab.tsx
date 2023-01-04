import React from 'react';
import styles from './card-lab.module.scss'
import svgLocation from '../../components/card-lab/images/svg/locationImg.svg'
import svgTime from '../../components/card-lab/images/svg/timeImg.svg'
import svgTell from '../../components/card-lab/images/svg/tellImg.svg'
import svgWebsite from '../../components/card-lab/images/svg/websiteImg.svg'
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
    name: string;
    location: string;
    time: string;
    tell: string;
    website: string;
    photo: string

}

const CardLab: React.FC<Props> = ({ name, location, time, tell, website, photo }) => {
    return <div className={styles.cardContainer}>
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
            <div className={styles.cardButtons}>
                <button className={styles.buttonLeft}>Book Now</button>
                <button className={styles.buttonRight}>Call Now</button>
            </div>
        </div>
    </div>
}

export default CardLab;