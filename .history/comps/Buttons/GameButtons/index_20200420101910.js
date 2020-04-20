import React from 'react';
import '../GameButtons/gamebuttons.css';


const GameButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="nextbtn01" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="nextbtn02">
        <p>CONTINUE</p>
    </div>
</div>

GameButton.defaultProps = {
    text: "Start",
    backgroundColor: "#F7AC70",
    boxShadow: '#ffff',
}

export default GameButton;