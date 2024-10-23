import React from 'react';
import '../Styles/Bumper.css';
import Contact from "./Contact";


const Bumper = () => {


    return (
        <div className="bumper-wrapper">
            <div className="bumper-container">
                <div className="bumper-text">
                    <h3>Kopje <span className="highlight-pink">koffie</span> doen?</h3>
                    <h3>Get in <span className="highlight-blue">touch!</span> </h3>
                </div>
                <div className="bumper-contact-container">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Bumper;
