
import React, { useState } from 'react';
import styles from './filters.module.scss';
import Filter from '../filter/filter';

interface Props {
}

const Filters: React.FC<Props> = (props) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const showContent = (id: number) => {
        setActiveIndex(id);
        id === activeIndex && setActiveIndex(null);
    }

    return <div className={styles.filters}>
        <h1 className={styles.title}>Filters</h1>
        <div className={styles.filtersContainer}>
            <Filter
                id={1}
                activeIndex={activeIndex}
                title='Choose desired city'
                showContent={showContent}
            />
            <Filter
                id={2}
                activeIndex={activeIndex}
                title='Choose desired lab'
                showContent={() => showContent(1)}
            />
            <Filter
                id={3}
                activeIndex={activeIndex}
                title='Choose desired service'
                showContent={showContent}
            />
            <Filter
                id={4}
                activeIndex={activeIndex}
                title='Choose price range'
                showContent={showContent}
            />
        </div>
    </div>
}

export default Filters;