import React from 'react';
import './status.css';

 const StatusMessage = ({text}) => {
    return(
        <div className="status">
            {text}
        </div>
        )
    }

    StatusMessage.defaultProps = {
    text: "No rush for love"}

    export default StatusMessage;