import React, { useEffect, useState } from 'react';
import styles from './table.module.scss';
import { ProfileAppointmentRow as RowInterface } from '../types';
import { ProfileAppointmentRow } from '../table-rows';

interface Props {
    heading?: string;
    columnTitles: string[];
    emptyColumns?: number;
    rows: RowInterface[];
}

const Table: React.FC<Props> = ({ heading, columnTitles, emptyColumns, rows }) => {
    return <div className={styles.table}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        <div className={styles.titlesContainer}>
            {
                columnTitles.map((title, i) => {
                    return <div
                        key={i}
                        className={styles.columnTitle}
                        style={{ width: `${100 / columnTitles.length + (emptyColumns || 0)}%` }}
                    >
                        {title}
                    </div>
                })
            }
            {emptyColumns && <div style={{ width: `${100 / (columnTitles.length + emptyColumns)}%` }} />}
        </div>
        <div className={styles.rowsContainer}>
            {
                rows.map((row, i) => {
                    return <ProfileAppointmentRow key={i} data={row}/>
                })
            }
        </div>
    </div>
}

export default Table;