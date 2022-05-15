import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate, active}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    if (pageNumbers.length > 1) {
        return (
            <div className="foundation__pagination">
                {pageNumbers.map(number => (
                    <button
                        key={number}
                        className="button button--small"
                        onClick={() => paginate(number)}
                    >{
                        number}
                    </button>
                ))}
            </div>
        )
    }
};


export default Pagination;