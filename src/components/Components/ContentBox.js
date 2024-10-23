import React from 'react';
import '../Styles/ContentBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PortfolioImageOne from "../../Assets/Images/01.png";
import PortfolioImageTwo from "../../Assets/Images/02.png";
import PortfolioImageThree from "../../Assets/Images/03.png";
import PortfolioImageFour from "../../Assets/Images/04.png";
import Card from './Card';

const ContentBox = () => {
    const portfolioItems = [
        { image: PortfolioImageOne, genre: 'Web Design', title: 'My Awesome Website' },
        { image: PortfolioImageTwo, genre: 'Graphic Design', title: 'Cool Poster' },
        { image: PortfolioImageThree, genre: 'Photography', title: 'Nature Shot' },
        { image: PortfolioImageFour, genre: 'Photography', title: 'Another Nature Shot' },
    ];

    // Duplicate the items for looping effect
    const loopedItems = [...portfolioItems, ...portfolioItems];

    return (
        <div className="contentBox-wrapper">
            <div className="contentBox-container">
                <div className="contentBox-text-container">
                    <h2>contentBox</h2>
                    <p>Lorem Ipsum</p>
                    <div className="contentBox-navigation">
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
                        </div>
                        <div className="arrow-container">
                            <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                        </div>
                    </div>
                </div>
                <div className="contentBox-image-container">
                    <div className="card-slider">
                        {loopedItems.map((item, index) => (
                            <Card
                                key={index}
                                image={item.image}
                                genre={item.genre}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentBox;