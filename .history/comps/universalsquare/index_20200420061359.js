import React from 'react'
import './square.css'

const Square = ({text}) => {

    return (
        <div className={"squareapp"}
        style={{
            backgroundImage:"url(" + Image + ")"
            }}>

        </div>
    )}

Square.defaultProps = {
    text:"Button",
    color: "#fff",
    bgColor: "#9cc25b"
}

export default Square;