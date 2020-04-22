import React from 'react';
import './search.css';

export default ({ onInputChange,placeHolder}) => {

    return (
        <input type="text" className='searchInput' placeHolder={placeHolder} onChange={onInputChange}/>
    )
}