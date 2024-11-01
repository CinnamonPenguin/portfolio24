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

const BookShowcase = () => {
    return (
        <div className="about-book">
            <h2>Lorem & Ipsum</h2>
            <div className="about-book-container">
                <div className="about-book-description">
                    <h3>Lorem Ipsum</h3>
                    <p>fuckity, bye!</p>
                </div>
                <div className="about-book-showcase">
                    <h3>Lorem Ipsum2</h3>
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
