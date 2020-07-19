import React, { useState } from 'react';
import styles from './Paginator.module.css';
import cn from 'classnames';


let Paginator = ({ totalItemsCount, pageSize, onPageChange, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    let showPages = pages
        .filter(page => (page >= leftPortionPageNumber && page <= rightPortionPageNumber))
        .map((page, index) => <span onClick={() => { onPageChange(page) }} key={index} className={cn({ [styles.selectedPage]: currentPage === page }, styles.pageNumber)} >{page}</span>)
    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
                <div>
                    <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev Page</button>
                    {showPages}
                </div>
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next Page</button>
            }
        </div>
    )
}


export default Paginator;