import React from 'react';
import './search.css';
import {FiSearch} from 'react-icons/fi';
export default ({ onSearchClick }) => {

    return (
        <FiSearch className="searchIcon" onClick={onSearchClick}/>
        
    )
}