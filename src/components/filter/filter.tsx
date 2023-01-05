
import React, { useState } from 'react';
import styles from './filter.module.scss';
import classNames from 'classnames';

interface Props {
    title: string;
    id: number;
    activeIndex: number | null;
    showContent: (id: number) => void;
}

const Filter: React.FC<Props> = ({ title, id, activeIndex, showContent }) => {
    return <div className={styles.filter} onClick={() => showContent(id)}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.arrow} />
        <div className={classNames(styles.hiddenContent, { [styles.active]: id === activeIndex })}>
            <p>fsajfasd</p>
            <p>fsalfdsa</p>
            <p>fdsfds</p>
        </div>
    </div>
}

export default Filter;