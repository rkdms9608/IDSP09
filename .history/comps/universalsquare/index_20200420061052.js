import React from 'react'
import './square.css'

const Square = ({Image}) => {

    return (
        <div className={"squareapp"}
        style={{
            backgroundImage:"url(" + Image + ")"
            }}>

        </div>
    )}

Square.defaultProps = {
        color: purple,
        width: "600px",
        height: "250px",
        padding: "15px"
}

export default Square;