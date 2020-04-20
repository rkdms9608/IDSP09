import React from 'react';
import './testpage.css';
import Square from '../../comps/universalsquare';
import StartButton from '../../comps/startpage-comps/start-button';
import HeaderText from '../../comps/headertext-comps';
import BodyText from '../../comps/bodytext-comps';

// const TestPage = () => {

//     return <div id="testapp" >
//         <Square />
//         <HeaderText text ="What do you want to try?" fontSize={30}/>
//         <BodyText text ="Pescaterian" fontSize={15}/>
//         <StartButton/> <StartButton/>
//     </div>
 
// }


const TestPage = () => {

    return <div id="testapp" >
        <Square HeaderText text ="Personality Test" fontSize={100} />
        
        <BodyText text ="Personality tests make it easier to meet people with similar characteristics to you." fontSize={15}/>
        <StartButton/> <StartButton/>
    </div>
 
}



export default TestPage;