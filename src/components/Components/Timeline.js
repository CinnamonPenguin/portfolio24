import React from 'react';
import '../Styles/Timeline.css';

const Timeline = () => {
    return (
        <div className="about-resume">
            <h2>Ervaring & Educatie</h2>
            <div className="timeline-container">
                <div className="grid-item education">
                    <h3>Ervaring</h3>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2012 - 2015</h5>
                                <span className="timeline-function">Grafisch vormgeving</span>
                                <p className="timeline-location">Firda</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2015 - 2019</h5>
                                <span className="timeline-function">Communicatie MutliMedia Design</span>
                                <p className="timeline-location">NHL Stenden</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2020 - 2024</h5>
                                <span className="timeline-function">Informatica</span>
                                <p className="timeline-location">NHL Stenden</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="grid-item jobs">
                    <h3>Educatie</h3>
                    <ul className="timeline">
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2016 - 2019</h5>
                                <span className="timeline-function">Assistent Manager</span>
                                <p className="timeline-location">Domino's Pizza Leeuwarden</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2019 - 2020</h5>
                                <span className="timeline-function">Afdelingshoofd</span>
                                <p className="timeline-location">Simian Drukkerij</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2022 - 2022</h5>
                                <span className="timeline-function">Project Manager</span>
                                <p className="timeline-location">Merchandise & Entertainment</p>
                            </div>
                        </li>
                        <li>
                            <div className="timeline-content">
                                <h5 className="timeline-years">2020 - 2024</h5>
                                <span className="timeline-function">Klantenservice</span>
                                <p className="timeline-location">Pricon</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Timeline;
