import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { useMediaQuery } from 'react-responsive'

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function Items({ currentItems }: any) {
    return (
        <>
            {currentItems &&
                currentItems.map((item: any) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}

function Pagination({ itemsPerPage }: any) {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const matchMedia = window.matchMedia("(max-width: 600px)");
            console.log(matchMedia.matches);
        }

        window.addEventListener('resize', handleResize);
        window.removeEventListener('resize', handleResize);
    }, []);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            {/* <Items currentItems={currentItems} /> */}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={isMobile ? 4 : 7}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="previous" //@ts-ignore
                renderOnZeroPageCount={null}
                pageClassName={styles.page}
                nextClassName={styles.pageNavigate}
                previousClassName={styles.pageNavigate}
                containerClassName={styles.paginationContainer}
                activeClassName={styles.active}
                breakClassName={styles.break}
            />
        </>
    );
}

export default Pagination;