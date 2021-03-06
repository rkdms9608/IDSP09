import React from 'react';
import Link from 'next/link';
import Router from 'next/Router';
import './continentpage.css';
import Header from '../../comps/mainheader-comps/header';
import HeaderText from '../../comps/headertext-comps';
import BodyText from '../../comps/bodytext-comps';
import Circle from '../../comps/universalcircle';
import StartButton from '../../comps/startpage-comps/start-button';
import Slider from '../../comps/slidercomps/slider';

// function nextPage(){
//     if(true){
//         Router.push("/MealPage");
//     }
//  }
 

const TestPage = () => {
    
    return <div id="mainapp">
        <Header/>
        <HeaderText text ="What do you want to try?" fontSize={30}/>
        <StartButton text ="Find more Vegan" /> <StartButton text ="Asia" />
        <Slider />
        <Circle/><Circle/>
        <br></br>
        <Circle/><Circle/>
            
        <div onClick={nextPage}>
            <Link href="/MealPage"><StartButton text ="NEXT" /></Link>
        </div> 
     
    
    </div>
}
    


export default TestPage;