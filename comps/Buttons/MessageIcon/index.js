import React from 'react';
import './message.css';
import {FiMessageSquare} from 'react-icons/fi';

 const MessageIcon = ({onMessage, text, color}) => {
    return(
        <button onClick={onMessage} className="message">
            <FiMessageSquare color="" className="messageIcon"/>
            <span color="">{text}</span>
        </button>
        )
    }

MessageIcon.defaultProps = {
        text: "Send Message"}

export default MessageIcon