import React from 'react';
import '../GameButtons/gamebuttons.css';


const GameButton = ({ text, fontSize, borderRaduis, backgroundColor, boxShadow }) => <div>
    <div class="gamebtn01" style={{ boxshadow: boxShadow, fontSize: fontSize, borderRaduis: borderRaduis, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p> 
    </div>

    <div class="gamebtn02">
        <p>CANCEL</p>
    </div>

    <div class="gamebtn03">
        <p>OPEN</p>
    </div>

    <div class="gamebtn04">
        <p>CALCULTATE</p>
    </div>

</div>

GameButton.defaultProps = {
    text: "START",
    backgroundColor: "#ffffff",
    boxShadow: '#ffffff',
    fontSize: "16px",
    borderRadius: "50px",
}

export default GameButton;