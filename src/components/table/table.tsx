import React, { useEffect, useState } from 'react';
import styles from './table.module.scss';
import { Row, TABLE } from '../types';
import { ProfileAppointmentRow, ProfileFindingRow, DashboardRow } from '../table-rows';
import classNames from 'classnames';
import { UploadPopup } from '../upload-popup';

interface Props {
    type: TABLE;
    heading?: string;
    columnTitles: string[];
    emptyColumns?: number;
    rows: Row[];
    setPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Table: React.FC<Props> = ({ heading, columnTitles, emptyColumns, rows, type, setPopup }) => {
    const cellWidth = 100 / columnTitles.length + (emptyColumns || 0);
    const [appointmentId, setAppointmentId] = useState('');
    const [uploadId, setUploadId] = useState('');

    return <div className={styles.table}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        <div className={classNames(styles.titlesContainer, { [styles.titlesRadius]: !heading })}>
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
                        setPopup={setPopup}
                    />
                })
            }
            {
                type === TABLE.DASHBOARD_ADMIN && rows.map((row, i) => {
                    return <DashboardRow
                        key={i}
                        data={row}
                        cellWidth={cellWidth}
                        appointmentId={appointmentId}
                        setAppointmentId={setAppointmentId}
                        uploadId={uploadId}
                        setUploadId={setUploadId}
                    />
                })
            }
        </div>
    </div>
}

export default Table;