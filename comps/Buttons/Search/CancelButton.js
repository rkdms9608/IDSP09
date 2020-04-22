import React from 'react';
import './search.css';

export default ({ onCancelClick,text }) => {

    return (
        <button onClick={onCancelClick}>
            {text}
        </button>
    )
}