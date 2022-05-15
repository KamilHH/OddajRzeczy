import React from 'react';

const Posts = ({data}) => {
    return (
        <>
            {data.map(e => {
                return (
                    <div key={e.id} className="foundation__box">
                        <div className="foundation__box-container">
                            <div className="foundation__box-item">
                                <span className="foundation__title">{e.title}</span>
                                <span className="foundation__subtitle">{e.subtitle}</span>
                            </div>
                            <span
                                className="foundation__description">{e.description}</span>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default Posts;