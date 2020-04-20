import React from 'react';
import '../../Buttons/buttons.css'

const SoftButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="btn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="btn02">
        <p>Sign Up</p>
    </div>
</div>

SoftButton.defaultProps = {
    text: "Login",
    backgroundColor: "#145844",
    boxShadow: '#ffff',
}

export default SoftButton;