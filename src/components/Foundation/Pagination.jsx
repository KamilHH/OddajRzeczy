import React from 'react';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="foundation__pagination">
            {pageNumbers.map(number => (
                <button onClick={() => paginate(number)} key={number}
                        className="button button button--small">{number}</button>
            ))}
        </div>
    )

};

export default Pagination;