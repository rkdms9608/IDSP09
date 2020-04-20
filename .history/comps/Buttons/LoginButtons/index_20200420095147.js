import React from 'react';
import '../LoginButtons/loginbuttons.css';

const LoginButton = ({ text, backgroundColor, boxShadow }) => <div>
    <div class="btn01" style={{ boxshadow: boxShadow, backgroundColor: backgroundColor, boxshadow: boxShadow }}>
        <p>{text}</p>
    </div>

    <div class="btn02">
        <p>Sign Up</p>
    </div>
</div>

LoginButton.defaultProps = {
    text: "Login",
    backgroundColor: "#fffff",
    boxShadow: '#ffff',
}

export default LoginButton;