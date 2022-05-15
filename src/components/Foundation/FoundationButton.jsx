import React from 'react';

const FoundationButton = ({id, title, active, setSelected, setCurrentPage}) => {
    return (
        <button key={id}
                className={active ? "button button--medium active" : "button button--medium"}
                onClick={() => {
                    setSelected(id)
                    setCurrentPage(1)
                }}
        >
            {title}
        </button>
    );
};

export default FoundationButton;