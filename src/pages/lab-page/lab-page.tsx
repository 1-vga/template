import React, { useEffect, useState } from 'react';
import styles from './lab-page.module.scss';
import { Subscribe } from '../../components/subscribe';
import svgLocation from '../lab-page/images/svg/locationImg.svg';
import star from '../lab-page/images/svg/star.svg';
import svgTime from '../lab-page/images/svg/timeImg.svg';
import svgTell from '../lab-page/images/svg/tellImg.svg';
import svgWebsite from '../lab-page/images/svg/websiteImg.svg';
import lab66 from '../lab-page/images/lab-66.jpg';
import corridor from '../lab-page/images/corridor-33.jpg';
import doctors from '../lab-page/images/doctors-33.jpg';
import bed from '../lab-page/images/bed-33.jpg';
import lab33 from '../lab-page/images/lab-33.jpg';
import { Carousel } from '../../components/carousel';
import { Map } from '../../components/map';
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumbs } from '../../components/breadcrumbs';
import classNames from 'classnames';

interface Props {

}

const LabPage: React.FC<Props> = () => {
    let navigate = useNavigate();
    const params = useParams() as any;

    //TODO lower logic must be replaced with response status
    useEffect(() => {
        //make enum
        const allowed = params.id === '1' || params.id === '2' || params.id === '3';
        !allowed && navigate("/notfound");
    }, []);
    //

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div className={styles.labPage}>
        {/* <Carousel /> */}
        <div className={styles.cotentContainer}>
            <section className={styles.content}>
                <Breadcrumbs />
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
                                    <img src={svgLocation} alt="location" />
                                </div>
                                <span className={styles.infoText}>Azize Šaćirbegović 16, Sarajevo 71000, Bosnia & Herzegovina</span>
                            </div>
                            <div className={styles.infoRow}>
                                <div className={styles.infoItem}>
                                    <div className={styles.svg}>
                                        <img src={svgTime} alt="time" />
                                    </div>
                                    <div className={styles.infoText}>Mon-Sun: 10:00 - 18:00</div>
                                </div>
                                <a className={styles.infoItem} href="tel: 88005553535">
                                    <div className={styles.svg}>
                                        <img src={svgTell} alt="tell" />
                                    </div>
                                    <div className={classNames(styles.infoText, styles.mobile)}>+387 33 725 900</div>
                                </a>
                                <a className={styles.infoItem} href="https://www.google.com" target='_blank'>
                                    <div className={styles.svg}>
                                        <img src={svgWebsite} alt="website" />
                                    </div>
                                    <div className={styles.infoText}>bosanes.ba</div>
                                </a>
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
                    <div className={styles.map}>
                        <Map />
                    </div>
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
                <a className={styles.tell} href="tel: 88005553535">+387 33 725 900</a>
            </section>
        </div>
        <Subscribe />
    </div>
}

export default LabPage;