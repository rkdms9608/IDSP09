import React from 'react';
import Link from 'next/link';
import Router from 'next/Router';
import './testpage.css';
import Square from '../comps/universalsquare';
import StartButton from '../comps/startpage-comps/start-button';



const TestPage = () => {
    
    return <div id="mainapp">
        <Header text ="Contact me!" fontSize={24} />
        <HeaderText text ="What do you want to try?" fontSize={30}/>
        <StartButton text ="Vegan"/>
        <Slider />
        <Circle /><BodyText text ="Vegan" fontSize={15}/> 
        <Circle/> <Circle/>
        <BodyText text ="Pescaterian" fontSize={15}/>


        <HeaderText text ="What are they?" fontSize={12}/>
    </div>
}
    


export default TestPage;