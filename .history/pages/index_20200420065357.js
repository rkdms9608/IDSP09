import React from 'react';
import Link from 'next/link';
import Router from 'next/Router';
import StartButton from '../comps/startpage-comps/start-button';
import './index.css';
import './app.css';


function nextPage() {
    Router.push("/LandingPage");

}


const Index = () => <div id="mainapp">
    <div onClick={nextPage}>
        <Link href="/LandingPage"><StartButton text ="Click Me" /></Link>
    </div> 
    
    
</div>


export default Index;


