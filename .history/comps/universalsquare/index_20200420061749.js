import React from 'react'
import './square.css'

const Square = ({text}) => <div className="squares">

    <div className="squares_inner">{text}</div>
</div>


Square.defaultProps = {
    text:"Suare Box",
    color: "#fff",
    bgColor: "#9cc25b"
}

export default Square;