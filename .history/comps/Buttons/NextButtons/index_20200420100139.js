import React from 'react';
import '../NextButtons/nexbuttons.css';

const NextButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="nextbtn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="nextbtn">
        <p>CONTINUE</p>
    </div>
</div>

NextButton.defaultProps = {
    text: "CONTINUE",
    backgroundColor: "#fffff",
    boxShadow: '#ffff',
}

export default NextButton;