import React, { useEffect } from 'react';
import '../Styles/Skillset.css';
import OutlineButton from "./OutlineButton";

const Skillset = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.grid-item');

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        document.getElementById('skillset-container').addEventListener('mousemove', handleMouseMove);

        return () => {
            document.getElementById('skillset-container').removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div id="skillset-container" className="skillset">
            <h2 className="skillset-title">
                <span className="highlight-pink">Skill</span>set
            </h2>

            <p className="skillset-description">
                Door de jaren heen heb ik veel ervaring opgedaan, van grafisch design tot coderen.
            </p>
            <div className="skillset-grid">
                <div className="grid-item code-skill skill-icon">
                    <h3><span className='highlight-blue'>Code</span> </h3>
                    <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
                </div>
                <div className="grid-item design-skill skill-icon">
                    <h3><span className='highlight-blue'>Design</span></h3>
                    <p>Grafisch vormgever geweest voor o.a. het Leeuwarder Koor en Merchandise & Entertainment.</p>
                </div>
                <div className="grid-item management-skill skill-icon">
                    <h3><span className='highlight-blue'>Management</span></h3>
                    <p>Van Manager Domino's Leeuwarden tot Project Manager in de ICT.</p>
                </div>
            </div>
            <OutlineButton text="download cv" />
        </div>
    );
};

export default Skillset;
