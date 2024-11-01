import React from 'react';
import '../../Styles/About/Experience.css'
import ReactLogo from "../../../Assets/Images/React.svg";
import Figma from "../../../Assets/Images/Figma.svg";
import XD from "../../../Assets/Images/XD.svg";
import WordPress from "../../../Assets/Images/WordPress.svg";
import Illustrator from "../../../Assets/Images/Illustrator.svg";
import Javascript from "../../../Assets/Images/Javascript.svg";

import backgroundImage from "../../../Assets/Images/blokhuispoort.jpg";
import OutlineButton from "../OutlineButton";
import walking from "../../../Assets/Images/walking.svg"

const Experience = () => {
    const items = [
        { image: ReactLogo, text: 'React' },
        { image: Figma, text: 'Figma' },
        { image: XD, text: 'Adobe XD' },
        { image: WordPress, text: 'Wordpres' },
        { image: Javascript, text: 'JavaScript' },
        { image: Illustrator, text: 'Illustrator' },
    ];

    return (
        <section className="experience-banner">
            <div className="experience-title">
                <h3>Experience</h3>
                <p>fuckity</p>
            </div>
            <div className="experience-container content">

                <div className="experience-grid">
                    {items.map((item, index) => (
                        <div key={index} className="experience-grid-item">
                            <img src={item.image} alt={item.text}/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="experience-container-blob"></div>
        </section>
    );
};
export default Experience;
