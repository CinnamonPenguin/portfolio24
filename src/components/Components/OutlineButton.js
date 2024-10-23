import React from 'react';
import '../Styles/OutlineButton.css';

function OutlineButton({ text, link }) {
    return (
        <a href={link} className="custom-outline-button">
            <div className="outline-button-text">
                {text}
            </div>
            <span className="outline-button-circle"></span>
        </a>
    );
}

export default OutlineButton;
