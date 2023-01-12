import React, { useEffect, useState } from 'react';
import styles from './result-card.module.scss';

interface Props {
    image: string;
    indication: string;
    rate: string;
}

const ResultCard: React.FC<Props> = () => {

    return <div className={styles.resultCard}>
       
    </div>
}

export default ResultCard;