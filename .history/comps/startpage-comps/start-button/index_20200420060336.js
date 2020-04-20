import React from 'react'
import'./start-button.css';

const StartButton = ({text}) => <div 
className="buttons" >

<div className="button_inner">{text}</div>

</div>


StartButton.defaultProps = {
    text:"Button",
    color: "#fff",
    bgColor: "#9cc25b"
}

export default StartButton;