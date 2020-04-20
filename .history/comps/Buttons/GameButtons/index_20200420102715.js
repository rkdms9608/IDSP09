import React from 'react';
import '../GameButtons/gamebuttons.css';


const GameButton = ({ text, fontSize, backgroundColor, boxShadow }) => <div>
    <div class="gamebtn01" style={{ boxshadow: boxShadow, fontSize: fontSize, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
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
    fontSize: "20px",
}

export default GameButton;