import React from 'react';
import '../../Styles/About/AboutBumper.css';
import OutlineButton from "../OutlineButton";

const Bumper = () => {
    return (
        <div className="aboutBumper-wrapper">
            <div className="aboutBumper-container">
                <div className="aboutBumper-text">
                    <h5>Samen een project doen?</h5>
                    <h2>Let's have a <span className="highlight-blue">chat</span>!</h2>
                </div>
                <div className="button-container">
                    <OutlineButton text="Get in touch"/>
                </div>
            </div>
        </div>
    );
};

export default Bumper;
