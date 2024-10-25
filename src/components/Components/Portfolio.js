// import React, { useState, useRef } from 'react';
// import '../Styles/Portfolio.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import PortfolioImageOne from "../../Assets/Images/01.png";
// import PortfolioImageTwo from "../../Assets/Images/02.png";
// import PortfolioImageThree from "../../Assets/Images/03.png";
// import PortfolioImageFour from "../../Assets/Images/04.png";
// import Card from './Card';
//
// const Portfolio = () => {
//     const portfolioItems = [
//         { image: PortfolioImageOne, genre: 'Graphic Design', title: 'Johnny Cash Neo Punk' },
//         { image: PortfolioImageTwo, genre: 'Graphic Design', title: 'Unique Typography' },
//         { image: PortfolioImageThree, genre: 'Graphic Design', title: 'London, innit' },
//         { image: PortfolioImageFour, genre: 'Graphic Novel', title: 'Troubles Just begun' },
//     ];
//
//     const loopedItems = [...portfolioItems, ...portfolioItems];
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const cardSliderRef = useRef(null);
//
//     const handleLeftArrowClick = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + loopedItems.length) % loopedItems.length);
//     };
//
//     const handleRightArrowClick = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % loopedItems.length);
//     };
//
//     const handleDragStart = (e) => {
//         e.preventDefault();
//     };
//
//     const handleMouseDown = (e) => {
//         const startX = e.clientX;
//         const slider = cardSliderRef.current;
//
//         const handleMouseMove = (moveEvent) => {
//             const moveX = moveEvent.clientX;
//             const diff = startX - moveX;
//
//             if (diff > 50) {
//                 handleRightArrowClick();
//                 cleanup();
//             } else if (diff < -50) {
//                 handleLeftArrowClick();
//                 cleanup();
//             }
//         };
//
//         const handleMouseUp = () => {
//             cleanup();
//         };
//
//         const cleanup = () => {
//             window.removeEventListener('mousemove', handleMouseMove);
//             window.removeEventListener('mouseup', handleMouseUp);
//         };
//
//         window.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('mouseup', handleMouseUp);
//     };
//
//     return (
//         <div className="portfolio-wrapper">
//             <div className="portfolio-container">
//                 <div className="portfolio-text-container">
//                     <h2 className="portfolio-title">
//                         <span className="highlight-blue">Port</span>folio
//                     </h2>
//                     <p>Een kleine selectie uit mijn persoonlijke projecten.</p>
//                     <div className="portfolio-navigation">
//                         <div className="arrow-container" onClick={handleLeftArrowClick}>
//                             <FontAwesomeIcon icon={faArrowLeft} className="arrow"/>
//                         </div>
//                         <div className="arrow-container" onClick={handleRightArrowClick}>
//                             <FontAwesomeIcon icon={faArrowRight} className="arrow"/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="portfolio-image-container" onMouseDown={handleMouseDown} onDragStart={handleDragStart}>
//                     <div
//                         className="card-slider"
//                         style={{ transform: `translateX(-${currentIndex * (100 / loopedItems.length)}%)` }}
//                         ref={cardSliderRef}
//                     >
//                         {loopedItems.map((item, index) => (
//                             <Card
//                                 key={index}
//                                 image={item.image}
//                                 genre={item.genre}
//                                 title={item.title}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Portfolio;


import React from 'react';
import '../Styles/Portfolio.css';
import ImageOne from '../../Assets/Images/01.png'
import ImageTwo from '../../Assets/Images/02.png'
import ImageThree from '../../Assets/Images/03.png'
import ImageFour from '../../Assets/Images/04.png'

const images = [
    {
        src: ImageOne,
        title: "Image One",
        description: "Description for image one."
    },
    {
        src: ImageTwo,
        title: "Image Two",
        description: "Description for image two."
    },
    {
        src: ImageThree,
        title: "Image Three",
        description: "Description for image three."
    },
    {
        src: ImageThree,
        title: "Image Four",
        description: "Description for image four."
    },
    {
        src: ImageTwo,
        title: "Image Five",
        description: "Description for image four."
    },
    {
        src: ImageOne,
        title: "Image Six",
        description: "Description for image four."
    },
    // Add more images as needed...
];

const ImageGallery = () => {
    return (
        <div className="gallery-container">
            <div className="portfolio-text-container">
                <h2 className="portfolio-title">
                    <span className="highlight-blue">Port</span>folio
                </h2>
                <div className="portfolio-description">
                    <p>Door de jaren heen heb ik een aantal items gemaakt met een persoonlijke betekenis.</p>
                    <p>Graag laat ik die hieronder zien, van portretten tot digitale statement pieces.</p>
                </div>
            </div>
            <div className="portfolio-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <div className="image-overlay">
                            <img src={image.src} alt={image.title} className="gallery-image" />
                            <div className="image-text">
                                <h5>{image.title}</h5>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
