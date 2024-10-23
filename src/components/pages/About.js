import React from 'react';
import OutlineButton from "../Components/OutlineButton";
import heroImageOne from "../../Assets/Images/FotoWebsite.png";
import '../Styles/About.css';
import '../Styles/Home.css';
import '../Styles/HomeContainer.css'

function About() {
    return (
    <div className="about-container">
        <div className="about-page-title-container">
            <h1 className="about-page-title">ROYSTOBBE</h1>
        </div>
        <div className="about-resume">
            <div className="timeline-container">
                <div className="grid-item education">
                    <h2>Education</h2>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-content">
                                <h3>Bachelor in Computer Science</h3>
                                <span>2016 - 2020</span>
                                <p>NHL Stenden, Emmen</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h3>High School</h3>
                                <span>2010 - 2016</span>
                                <p>Leeuwarden High School</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grid-item jobs">
                    <h2>Job Experience</h2>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-content">
                                <h3>Project Manager</h3>
                                <span>2021 - Present</span>
                                <p>ICT Company, Leeuwarden</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h3>Graphic Designer</h3>
                                <span>2018 - 2021</span>
                                <p>Freelancer</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    )
        ;
}

export default About;




