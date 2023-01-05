import React, { useState } from 'react';
import styles from './lab-page.module.scss';
import { Subscribe } from '../../components/subscribe';
import svgLocation from '../lab-page/images/svg/locationImg.svg';
import star from '../lab-page/images/svg/star.svg';
import svgTime from '../lab-page/images/svg/timeImg.svg';
import svgTell from '../lab-page/images/svg/tellImg.svg';
import svgWebsite from '../lab-page/images/svg/websiteImg.svg';
import map from '../lab-page/images/map.jpg';
import lab66 from '../lab-page/images/lab-66.jpg';
import corridor from '../lab-page/images/corridor-33.jpg';
import doctors from '../lab-page/images/doctors-33.jpg';
import bed from '../lab-page/images/bed-33.jpg';
import lab33 from '../lab-page/images/lab-33.jpg';

interface Props {

}


const LabPage: React.FC<Props> = () => {

    return <div className={styles.labPage}>

        <div className={styles.cotentContainer}>
            <section className={styles.content}>
                <div className={styles.infoTop}>
                    <div className={styles.cardInfo}>
                        <div className={styles.cardHeadinItem}>
                            <h1 className={styles.cardHeading}>Poliklinika Bosanes
                            </h1>
                            <ul className={styles.cardReviews}>
                                <li><img className={styles.starCard} src={star} alt="star" /></li>
                                <li><h2 className={styles.rating}>4.3</h2></li>
                                <li><p className={styles.reviews}>(67 reviews)</p></li>
                            </ul>
                        </div>
                        <div>
                            <ul className={styles.cardTextItem}>
                                <li className={styles.infotItem}>
                                    <span><img className={styles.svg} src={svgLocation} alt="location" />Azize Šaćirbegović 16, Sarajevo 71000, Bosnia & Herzegovina</span>
                                </li>
                                <li>
                                    <ul className={styles.infotItemRow}>
                                        <li className={styles.infotItem}>
                                            <span><img className={styles.svg} src={svgTime} alt="time" />Mon-Sun: 10:00 - 18:00</span>
                                        </li>
                                        <li className={styles.infotItem}>
                                            <span><img className={styles.svg} src={svgTell} alt="tell" />+387 33 725 900</span>
                                        </li>
                                        <li className={styles.infotItem}>
                                            <span><img className={styles.svg} src={svgWebsite} alt="website" />bosanes.ba</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.menu}>
                    <div className={styles.menuServicesHeading}>Menu</div>
                    <ul className={styles.menuServices}>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>PCR Test</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Antigen Test</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Diopter check</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Fundus examination</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Cardiac examination with EKG</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Gynecological examinations</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                        <li className={styles.menuList}>
                            <div className={styles.menuHeading}>Pregnancy diagnosis</div>
                            <div className={styles.dashed}></div>
                            <div className={styles.menuDistance}>65 KM</div>
                        </li>
                    </ul>
                </div>
                <div className={styles.border}></div>
                <div className={styles.about}>
                    <div className={styles.aboutHeading}>About</div>
                    <div className={styles.map}><img src={map} alt="map" /></div>
                </div>
                <div className={styles.border}></div>

                <div className={styles.description}>
                    <div className={styles.descriptionHeading}>Description</div>
                    <div className={styles.descriptionSubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sed amet penatibus semper. Quam amet et porttitor etiam justo. Mauris tempus, mauris, at elementum est felis eu volutpat. Sapien, massa urna nisl, ut fermentum. Montes, quis nisl, proin odio dictum maecenas nunc, pulvinar. Magna eget phasellus facilisis quis auctor. Lacinia a risus magna tortor viverra nullam rhoncus nunc. Fermentum porta enim adipiscing eget et eget tortor tempus. Diam eu viverra fames orci enim, tortor amet feugiat tortor. Tristique in urna nunc, orci dui amet cursus posuere tortor. Scelerisque semper dolor, ut dolor augue morbi ut. Nec facilisis vel sit orci, fames. Proin dui arcu ante augue eget fermentum. Pretium, ultrices phasellus congue interdum sem quisque elementum scelerisque consequat. Sollicitudin tortor, faucibus dui convallis turpis neque, adipiscing vulputate dolor. Lacus diam, placerat dignissim elit donec nunc in. Quis et volutpat vitae tellus volutpat, quam ac. Ac praesent condimentum elit ut quis metus amet. Pharetra velit neque, enim consequat facilisis facilisis ornare venenatis.</div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.photos}>
                    <div className={styles.photosHeading}>Photos</div>
                    <div className={styles.photosImg}>
                        <div className={styles.row1}>
                            <div className={styles.photos66}><img src={lab66} alt="lab" /></div>
                            <div className={styles.photos33}><img src={corridor} alt="corridor" /></div>
                        </div>
                        <div className={styles.row2}>
                        <div className={styles.photos33}><img src={doctors} alt="doctors" /></div>
                        <div className={styles.photos33}><img src={bed} alt="bed" /></div>
                        <div className={styles.photos33}><img src={lab33} alt="lab" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.phoneSection}>
                <div className={styles.callMe}>
                    <div className={styles.call}>Call to make an appointment</div>
                    <div className={styles.border}></div>
                    <button className={styles.tell}><a className={styles.tellA} href="tel: 88005553535">+387 33 725 900</a></button>
                </div>
            </section>
        </div>
        {/* <Subscribe /> */}
    </div>
}

export default LabPage;