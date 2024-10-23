import React, { useEffect, useState } from 'react';
import '../Styles/Footer.css';
import logo from "../../Assets/Images/Title-04.svg";
import OutlineButton from "../Components/OutlineButton";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-item left-item">
                    <img src={logo} alt="Description of Image 1" className="logo-image"/>
                    <div className="footer-item-text">
                        <p>Je hebt het tot hier gered, misschien ben je wel klaar voor een nieuw project?</p>
                    </div>
                    <div className="footer-item-text">
                        <p>Websites bouwen is mijn ding, maar ik ben ook heel goed in koffie drinken.</p>
                    </div>
                    <OutlineButton text="afspraak maken?" />
                </div>
                <div className="footer-item middle-item">
                    <h5>Pagina's</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.np</p>
                </div>
                <div className="footer-item">
                    <h3>Right Section</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
