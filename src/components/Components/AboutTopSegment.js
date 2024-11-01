import React, { useEffect, useState } from 'react';
import '../Styles/AboutTopSegment.css';
import '../Styles/AboutTopSegmentRoundness.css';
import '../Styles/AboutTopSegmentConfiguration.css';

const AboutTopSegment = () => {
    const allowedCombinations = [
        { configuration: 1, roundness: 1 },
        { configuration: 2, roundness: 1 },
        { configuration: 3, roundness: 2 },
        { configuration: 4, roundness: 3 },
        { configuration: 4, roundness: 1 }
    ];

    const [currentComboIndex, setCurrentComboIndex] = useState(0);
    const [currentCombo, setCurrentCombo] = useState(allowedCombinations[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComboIndex((prevIndex) =>
                (prevIndex + 1) % allowedCombinations.length
            );
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentCombo(allowedCombinations[currentComboIndex]);
    }, [currentComboIndex, allowedCombinations]);

    return (
        <div className="about-container">
            <div
                id="wrapper"
                // data-configuration={currentCombo.configuration}
                data-configuration="4"
                // data-roundness={currentCombo.roundness}
                data-roundness="3"
            >
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

        </div>
    );
};

export default AboutTopSegment;
