// import React from 'react';

// import BookCoverA5 from '../../../Assets/Images/BookCover.png'
//
// const BookCover = () => {
//     return (
//         <div className="book-container">
//             <div className="book-cover" style={{ backgroundImage: `url(${BookCoverA5})` }}></div>
//             <div className="book-spine"></div>
//         </div>
//     );
// };
//
// export default BookCover;


import React from 'react';
import '../../Styles/About/BannerWithBook.css';
import BookCoverA5 from '../../../Assets/Images/BookCover.png';

const BannerWithBook = () => {
    return (
        <div className="banner">
            <h2>Lorem Ipsum</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
            <div className="wrapper">
                <div className="text-section">
                    <h4>Lorem Ipsum Title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                </div>
                <div className="book-section">
                    <div className="book-container">
                        <div className="book-cover" style={{ backgroundImage: `url(${BookCoverA5})` }}></div>
                        <div className="book-spine"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerWithBook;
