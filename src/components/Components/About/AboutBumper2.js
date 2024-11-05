import React from 'react';
import '../../Styles/About/AboutBumper2.css';
import OutlineButton from "../OutlineButton";

const splitText = (text) => {
    return text.split("").map((char, index) => (
        <span
            key={index}
            className={`animated-char ${char === " " ? "space" : ""}`}
            style={{ "--index": index }}
        >
            {char === " " ? "\u00A0" : char} {/* Use a non-breaking space */}
        </span>
    ));
};


const Bumper = () => {
    return (
        <div className="aboutBumper-wrapper">
            <div className="aboutBumper-container">
                <div className="aboutBumper-text">
                    <h5>Samen een project doen?</h5>
                    <h2>
                        {splitText("Let's have a chat!")}
                    </h2>
                </div>
                <div className="button-container">
                    <OutlineButton text="Get in touch" />
                </div>
            </div>
        </div>
    );
};


export default Bumper;
