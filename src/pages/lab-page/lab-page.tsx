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
                        <div className={styles.cardHeadingItem}>
                            <h1 className={styles.cardHeading}>Poliklinika Bosanes</h1>
                            <div className={styles.cardReviews}>
                                <div className={styles.star}><img src={star} alt="star" /></div>
                                <div className={styles.rating}>4.3</div>
                                <div className={styles.reviews}>(67 reviews)</div>
                            </div>
                        </div>
                        <div className={styles.cardTextItem}>
                            <div className={styles.infoItem}>
                                <div className={styles.svg}>
                                    <img className={styles.svg} src={svgLocation} alt="location" />
                                </div>
                                <div className={styles.infoText}>Azize Šaćirbegović 16, Sarajevo 71000, Bosnia & Herzegovina</div>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.infoItem}>
                                    <div className={styles.svg}>
                                        <img className={styles.svg} src={svgTime} alt="time" />
                                    </div>
                                    <div className={styles.infoText}>Mon-Sun: 10:00 - 18:00</div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.svg}>
                                        <img className={styles.svg} src={svgTell} alt="tell" />
                                    </div>
                                    <div className={styles.infoText}>+387 33 725 900</div>
                                </div>
                                <div className={styles.infoItem}>
                                    <div className={styles.svg}>
                                        <img src={svgWebsite} alt="website" />
                                    </div>
                                    <div className={styles.infoText}>bosanes.ba</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.menu}>
                    <h2 className={styles.title}>Menu</h2>
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
                    <h2 className={styles.title}>About</h2>
                    <div className={styles.map}><img src={map} alt="map" /></div>
                </div>
                <div className={styles.border}></div>
                <div className={styles.description}>
                    <h2 className={styles.title}>Description</h2>
                    <p className={styles.descriptionSubtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sed amet penatibus semper.
                        Quam amet et porttitor etiam justo. Mauris tempus, mauris, at elementum est felis eu volutpat.
                        Sapien, massa urna nisl, ut fermentum. Montes, quis nisl, proin odio dictum maecenas nunc, pulvinar.
                        Magna eget phasellus facilisis quis auctor. Lacinia a risus magna tortor viverra nullam rhoncus nunc.
                        Fermentum porta enim adipiscing eget et eget tortor tempus. Diam eu viverra fames orci enim, tortor
                        amet feugiat tortor. Tristique in urna nunc, orci dui amet cursus posuere tortor. Scelerisque semper dolor,
                        ut dolor augue morbi ut. Nec facilisis vel sit orci, fames. Proin dui arcu ante augue eget fermentum. Pretium,
                        ultrices phasellus congue interdum sem quisque elementum scelerisque consequat. Sollicitudin tortor, faucibus
                        dui convallis turpis neque, adipiscing vulputate dolor. Lacus diam, placerat dignissim elit donec nunc in.
                        Quis et volutpat vitae tellus volutpat, quam ac. Ac praesent condimentum elit ut quis metus amet. Pharetra
                        velit neque, enim consequat facilisis facilisis ornare venenatis.
                    </p>
                </div>
                <div className={styles.border}></div>
                <div className={styles.photos}>
                    <h2 className={styles.title}>Photos</h2>
                    <div className={styles.photosContainer}>
                        <div className={styles.photo}><img src={lab66} alt="lab" /></div>
                        <div className={styles.photo}><img src={corridor} alt="corridor" /></div>
                        <div className={styles.photo}><img src={doctors} alt="doctors" /></div>
                        <div className={styles.photo}><img src={bed} alt="bed" /></div>
                        <div className={styles.photo}><img src={lab33} alt="lab" /></div>
                    </div>
                </div>
            </section>
            <section className={styles.phoneSection}>
                <div className={styles.call}>Call to make an appointment</div>
                <div className={styles.border}></div>
                <button className={styles.tell}>
                    <a href="tel: 88005553535">+387 33 725 900</a>
                </button>
            </section>
        </div>
        <Subscribe />
    </div>
}

export default LabPage;