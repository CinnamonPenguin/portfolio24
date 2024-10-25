import React, { useEffect, useState } from 'react';
import '../Styles/Footer.css';
import logo from "../../Assets/Images/Title-04.svg";
import OutlineButton from "../Components/OutlineButton";
import {NavLink} from "react-router-dom";
import {faAnglesRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBehance, faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

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
                    <OutlineButton text="afspraak maken?"/>
                </div>
                <div className="footer-item middle-item">
                    <h5>Pagina's</h5>
                    <ul className="footer-navbar-links">
                        <li><NavLink to="/"><FontAwesomeIcon icon={faAnglesRight}
                                                             className="anglesRight"/> Home</NavLink></li>
                        <li><NavLink to="/about"><FontAwesomeIcon icon={faAnglesRight}
                                                                  className="anglesRight"/> About</NavLink></li>
                        <li><NavLink to="/creative"><FontAwesomeIcon icon={faAnglesRight}
                                                                     className="anglesRight"/> Creative</NavLink>
                        </li>

                        <li><NavLink to="/coder"><FontAwesomeIcon icon={faAnglesRight}
                                                                  className="anglesRight"/> Coder</NavLink></li>
                        <li><NavLink to="/portfolio"><FontAwesomeIcon icon={faAnglesRight}
                                                                      className="anglesRight"/> Portfolio</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="footer-item right-item">
                    <h5>Socials</h5>
                    <ul className="footer-social-links">
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub}/> GitHub
                        </a></li>
                        <li><a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faBehance}/> Behance
                        </a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/> LinkedIn
                        </a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram}/> Instagram
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
