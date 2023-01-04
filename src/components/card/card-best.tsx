import React from 'react';
import styles from './card.module.scss'
import svgLocation from '../../components/card/images/svg/locationImg.svg'
import svgTime from '../../components/card/images/svg/timeImg.svg'
import svgTell from '../../components/card/images/svg/tellImg.svg'
import svgWebsite from '../../components/card/images/svg/websiteImg.svg'
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Props {
    name: string;
    location: string;
    time: string;
    tell: string;
    website: string;
    photo: string

}

const CardBest: React.FC<Props> = ({ name, location, time, tell, website, photo }) => {
    return <> 
        <div className={styles.cardContainer}>
            <img className={styles.cardImg} src={photo} alt="photo" />
            <ul className={styles.cardText}>
                <li className={styles.name}>{name}</li>
                <li className={styles.location}><span><img className={styles.svg} src={svgLocation} alt="location" /></span>{location}</li>
                <li className={styles.time}><span><img className={styles.svg} src={svgTime} alt="time" /></span>{time}</li>
                <li className={styles.tell}><span><img className={styles.svg} src={svgTell} alt="tell" /></span>{tell}</li>
                <li className={styles.website}><span><img className={styles.svg} src={svgWebsite} alt="website" /></span>{website}</li>
            </ul>
            <div className={styles.cardButtons}>
                <button className={styles.buttonLeft}>Book Now</button>
                <button className={styles.buttonRight}>Call Now</button>
            </div>
        </div>
    </>
}

export default CardBest;