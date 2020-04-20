import React from 'react';
import '../comps/Buttons/buttons.css'

const LoginButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="btn" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="btn02">
        <p>Sign Up</p>
    </div>
</div>

LoginButton.defaultProps = {
    text: "Login",
    backgroundColor: "#145844",
    boxShadow: '#ffff',
}

export default LoginButton;