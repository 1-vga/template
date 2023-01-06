
import React, { useState } from 'react';
import styles from './filters.module.scss';
import Filter from '../filter/filter';

interface Props {
}

const Filters: React.FC<Props> = (props) => {
    const [filters, setFilters] = useState<{[key: string]: {isOpen: boolean}}>({
        city: {isOpen: false},
        lab: {isOpen: false},
        service: {isOpen: true},
        range: {isOpen: false}
    });

    const showContent = (id: string) => {
        setFilters({...filters, [id]: {isOpen: !filters[id].isOpen}});
    }

    return <div className={styles.filters}>
        <h1 className={styles.title}>Filters</h1>
        <div className={styles.filtersContainer}>
            <Filter
                id={'city'}
                filters={filters}
                title='Choose desired city'
                showContent={showContent}
            />
            <Filter
                id={'lab'}
                filters={filters}
                title='Choose desired lab'
                showContent={showContent}
            />
            <Filter
                id={'service'}
                filters={filters}
                title='Choose desired service'
                showContent={showContent}
            />
            <Filter
                id={'range'}
                filters={filters}
                title='Choose price range'
                showContent={showContent}
            />
        </div>
    </div>
}

export default Filters;