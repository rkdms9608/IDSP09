import React from 'react';
import Link from 'next/link';
import Router from 'next/Router';
import './testpage.css';
import Square from '../comps/universalsquare';
import StartButton from '../comps/startpage-comps/start-button';
import HeaderText from '../../comps/headertext-comps';
import BodyText from '../../comps/bodytext-comps';



const TestPage = () => {
    <Square />

    return <div id="testapp">
        <HeaderText text ="What do you want to try?" fontSize={30}/>
        <BodyText text ="Pescaterian" fontSize={15}/>
        <StartButton/> <StartButton/>
    </div>
}


export default TestPage;