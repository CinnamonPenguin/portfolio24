import React from 'react';
import '../../Styles/About/Numbers.css';

const Numbers = () => {
    const numberData = [
        { number: 5, description: ["jaar ervaring"] },
        { number: ["7K+"], description: ["Kopjes koffie", "gedronken"] },
        { number: 4, description: ["Referenties van collega's"] },
        { number: 1, description: ["Gemiste verjaardag.", "Sorry Sjakie."] },
    ];

    return (
        <div className="numbers-wrapper">
            <div className="numbers-container">
                {numberData.map((item, index) => (
                    <div className="numbers-text" key={index}>
                        <div className="numbers-number">
                            <h3>{item.number}</h3>
                        </div>
                        <div className="numbers-description">
                            {item.description.map((desc, idx) => (
                                <p key={idx}>{desc}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Numbers;
