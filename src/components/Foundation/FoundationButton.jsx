import React from 'react';

const FoundationButton = ({id, title, active, setSelected}) => {
    return (
        <button key={id}
                className={active ? "button button--medium active" : "button button--medium"}
                onClick={() => setSelected(id)}
        >
            {title}
        </button>
    );
};

export default FoundationButton;