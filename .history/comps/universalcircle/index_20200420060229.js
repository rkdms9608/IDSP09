import React from 'react'
import './circle.css'

const Circle = ({Image}) => {

    return (
        <div className={"circleapp"}
        style={{
            backgroundImage:"url(" + Image + ")"
            }}>

        </div>
    )}

Circle.defaultProps = {
    Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/220px-SNice.svg.png"
}

export default Circle;