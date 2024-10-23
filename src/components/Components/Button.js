import React from 'react';
import '../Styles/Button.css';

function Button({ text, link }) {
    return (
        <a href={link} className="custom-button">
            <div className="button-text">
                {text}
            </div>
            <span className="button-circle"></span>
        </a>
    );
}

export default Button;
