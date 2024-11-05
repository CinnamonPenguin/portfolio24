// // BookShowcase.js
// import React from 'react';
// import BookCoverA5 from '../../../Assets/Images/BookCover.png';
// import BookSpine from '../../../Assets/Images/BookSpine.png';
// import '../../Styles/About/BookShowcase.css';
//
// const BookShowcase = () => {
//     return (
//         // <div className="book-wrapper">
//         //     <div className="book-scene">
//         //         <div className="book-container">
//         //             <a href="#" className="book">
//         //                 <div className="cover">
//         //                     <img src={BookCoverA5} alt="Book Cover" className="cover-image" />
//         //                 </div>
//         //                 <div className="spine">
//         //                     <img src={BookSpine} alt="Book Spine" className="spine-image"/>
//         //                 </div>
//         //             </a>
//         //         </div>
//         //     </div>
//         // </div>
//
// //
// //     return (
// //         <div className="showcase-wrapper">
// //             <div className="showcase-container">
// //                 <h3>Lorem Ipsum</h3>
// //                 <div className="showcase=content">
// //                     <div className="showcase-box-left">Div 1</div>
// //                     <div className="showcase-box-right">Div 2</div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
//
//
//         <div className="about-book">
//             <h2>Lorem & Ipsum</h2>
//             <div className="about-book-container">
//                 <div className="about-book-grid-item about-book-description">
//                     <h3>Lorem Ipsum</h3>
//                     <p>fuckity, bye!</p>
//                 </div>
//
//                 <div className="about-book-grid-item about-book-showcase">
//                     <h3>Lorem Ipsum2</h3>
//                     <div className="book-scene">
//                         <div className="book-container">
//                             <a href="#" className="book">
//                                 <div className="cover">
//                                     <img src={BookCoverA5} alt="Book Cover" className="cover-image"/>
//                                 </div>
//                                 <div className="spine">
//                                     <img src={BookSpine} alt="Book Spine" className="spine-image"/>
//                                 </div>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//         </div>
//     );
// };
//
// export default BookShowcase;


import React from 'react';
import BookCoverA5 from '../../../Assets/Images/BookCover.png';
import BookSpine from '../../../Assets/Images/BookSpine.png';
import '../../Styles/About/BookShowcase.css';
import OutlineButton from "../OutlineButton";

const BookShowcase = () => {
    return (
        <div className="about-book-container">
            {/*<h2 className="about-book-title">Trouble's Just Begun</h2>*/}
            {/*<div className="about-book-title">*/}
            {/*    <h2>*/}
            {/*        Trouble's Just Begun*/}
            {/*    </h2>*/}
            {/*</div>*/}

            <h2 className="about-book-title">
                Trouble's Just Begun
            </h2>

            <div className="about-book-description">
                <p>
                    150+ pagina's. 100.000+ woorden. 1 boek. Uitgegeven in eigen beheer.
                </p>
                <p>
                    Een verhaal over verraad, moedeloosheid en een neerwaartse spiraal in het Chicago van 1930.
                </p>
            </div>


            <div className="about-book-grid">
                <div className="about-book-grid-item">
                    <h3 className="about-book-summary">
                        Chicago, 1930
                    </h3>
                    <p classname="about-book-story-description">
                        Chicago, 1930. De tjd van de drooglegging, de financiële crisis en Al Capone.
                        In een stad die vecht om vrij te zijn van georganiseerde misdaad is niet iedereen gelijk.
                        John Wood heeft zijn leven in armoede achter zich gelaten en probeert van het leven te genieten,
                        totdat ook hij geconfronteerd wordt met de waarheid.
                    </p>
                    <p>
                        Een verhaal over liefde en verdriet, verraad en vriendschap.
                    </p>

                    <OutlineButton text="Lees hier het eerste hoofdstuk"></OutlineButton>
                </div>


                <div className="about-book-grid-item">
                    <div className="book">
                        <div className="cover">
                            <img src={BookCoverA5} alt="Book Cover" className="cover-image"/>
                        </div>
                        <div className="spine">
                            <img src={BookSpine} alt="Book Spine" className="spine-image"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookShowcase;
