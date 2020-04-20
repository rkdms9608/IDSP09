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
    Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
}

export default Square;