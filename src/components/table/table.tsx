import React, { useEffect, useState } from 'react';
import styles from './table.module.scss';
import { Row, TABLE } from '../types';
import { ProfileAppointmentRow, ProfileFindingRow } from '../table-rows';

interface Props {
    type: TABLE;
    heading?: string;
    columnTitles: string[];
    emptyColumns?: number;
    rows: Row[];
}

const Table: React.FC<Props> = ({ heading, columnTitles, emptyColumns, rows, type }) => {
    const cellWidth = 100 / columnTitles.length + (emptyColumns || 0);

    return <div className={styles.table}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        <div className={styles.titlesContainer}>
            {
                columnTitles.map((title, i) => {
                    return <div
                        key={i}
                        className={styles.columnTitle}
                        style={{ width: `${cellWidth}%` }}
                    >
                        {title}
                    </div>
                })
            }
            {emptyColumns && <div style={{ width: `${cellWidth}%` }} />}
        </div>
        <div className={styles.rowsContainer}>
            {
                type === TABLE.PROFILE_APPOINTMENT && rows.map((row, i) => {
                    return <ProfileAppointmentRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                    />
                })
            }
            {
                type === TABLE.PROFILE_FINDINGS && rows.map((row, i) => {
                    return <ProfileFindingRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                    />
                })
            }
        </div>
    </div>
}

export default Table;