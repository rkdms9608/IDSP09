import React from 'react';
import Square from '../comps/universalsquare';
import Search from '../comps/Buttons/Search';
import HamburgerMenu from '../comps/Buttons/HamburgerMenu';
import StatusMessage from '../comps/Buttons/StatusMessage';
import MessageIcon from '../comps/Buttons/MessageIcon';


export default {
    title:"Square",
    component:Square,
}

export const MySquare = () => <Square />

export const MySearch = () => {
    return <Search />
  }

export const MyHamburgerMenu = () => {
    return <HamburgerMenu />
  }

export const MyStatusMessage = () => {
    return <StatusMessage />
  }

export const MyMessageIcon = () => {
    return <MessageIcon />
  }