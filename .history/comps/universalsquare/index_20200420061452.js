import React from 'react'
import './square.css'

const Square = ({text}) => <div className="squares">

    <div className="button_inner">{text}</div>
</div>


Square.defaultProps = {
    text:"Button",
    color: "#fff",
    bgColor: "#9cc25b"
}

export default Square;