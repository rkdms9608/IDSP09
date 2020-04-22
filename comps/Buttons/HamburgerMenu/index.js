import React from 'react';
import './menu.css';
import {GiHamburgerMenu} from 'react-icons/gi';

export default ({onMenu}) => {
    return(
        <GiHamburgerMenu className="menuButton" onClick={onMenu}/>
    )
}