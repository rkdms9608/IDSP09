import React from 'react';
import Link from 'next/link';
import Router from 'next/Router';
import './testpage.css';
import Square from '../comps/universalsquare';
import StartButton from '../comps/startpage-comps/start-button';

export default {
    title:"hi",
    component: null,
}

export const MySquare = () => <Square />
export const MyStartButton = () => <StartButton/>




import './typepage.css';
import Header from '../../comps/mainheader-comps/header';
import HeaderText from '../../comps/headertext-comps';
import BodyText from '../../comps/bodytext-comps';
import Circle from '../../comps/universalcircle';
import StartButton from '../../comps/startpage-comps/start-button';
import Slider from '../../comps/slidercomps/slider';



function nextPage(){
    if(true){
        Router.push("/ContinentPage");
    }
 }
 

const TypePage = () => {
    
    return <div id="mainapp">
        <Header text ="Contact me!" fontSize={24} />
        <HeaderText text ="What do you want to try?" fontSize={30}/>
        <StartButton text ="Vegan"/>
        <Slider />
        <Circle /><BodyText text ="Vegan" fontSize={15}/> 
        <Circle/> <Circle/>
        <BodyText text ="Pescaterian" fontSize={15}/>

        <div onClick={nextPage}>
            <Link href="/ContinentPage"><StartButton text ="NEXT" /></Link>
        </div> 

        <HeaderText text ="What are they?" fontSize={12}/>
    </div>
}
    


export default TypePage;