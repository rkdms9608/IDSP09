import React from 'react';
import '../GameButtons/gamebuttons.css';


const GameButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="gamebtn01" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="gamebtn02">
        <p>CONTINUE</p>
    </div>
</div>

GameButton.defaultProps = {
    text: "Start",
    backgroundColor: "#F7AC70",
    boxShadow: '#ffff',
}

export default GameButton;