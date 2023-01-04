import React, { useState } from 'react';
import styles from './subscribe.module.scss';




interface Props {
   
}



const Subscribe: React.FC<Props> = () => {
    const [email, setEmail] = React.useState('');


    const loadDataFromForm = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(email);
        // api.login(email)
       
      };
    return (<>
        <div className={styles.subscribeContainer}>
            <h1 className={styles.subscribeTitle}>Get In Touch</h1>
            <h2 className={styles.subscribeSubTitle}>The gradual accumulation of information about atomic and
                small-scale behaviour during the first quarter of the 20th </h2>
            <form onSubmit={loadDataFromForm} className={styles.contactForm}>
                <input type="email" className={styles.formSubject} placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' className={styles.subscribeBtn}>Subscribe</button>
                {/* <input type="submit" className={styles.subscribeBtn} value='Subscribe'/> */}
            </form>
        </div>
    </>)
}

export default Subscribe;