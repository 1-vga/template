
import React, { useState } from 'react';
import styles from './filter.module.scss';
import classNames from 'classnames';

interface Props {
    title: string;
    id: string;
    filters: { [key: string]: { isOpen: boolean } },
    showContent: (id: string) => void;
}

const Filter: React.FC<Props> = ({ title, id, filters, showContent }) => {
    return <div className={styles.filter}>
        <div className={styles.content} onClick={() => showContent(id)}>
            <h2 className={styles.title}>{title}</h2>
            <div className={classNames(styles.arrow, { [styles.active]: filters[id].isOpen })} />
        </div>
        <div className={classNames(styles.hiddenContent, { [styles.isOpen]: filters[id].isOpen })}>
            <div className={styles.filterItem}>filter 1</div>
            <div className={styles.filterItem}>filter 2</div>
            <div className={styles.filterItem}>filter 3</div>
            <div className={styles.filterItem}>filter 4</div>
            <div className={styles.filterItem}>filter 5</div>
        </div>
    </div>
}

export default Filter;