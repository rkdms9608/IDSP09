import React from 'react';
import '../NextButtons/nextbuttons.css';


const NextButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="nextbtn01" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="nextbtn02">
        <p>CONTINUE</p>
    </div>
</div>

NextButton.defaultProps = {
    text: "CONTINUE",
    backgroundColor: "#F7AC70",
    boxShadow: '#ffff',
}

export default NextButton;