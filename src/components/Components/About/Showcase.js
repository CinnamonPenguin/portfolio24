import React from 'react';
import BookCoverA5 from '../../../Assets/Images/BookCover.png';
import BookSpine from '../../../Assets/Images/BookSpine.png';
import '../../Styles/About/Showcase.css';

const BookShowcase = () => {
    return (
        <div className="showcase-wrapper">
            <div className="showcase-container">
                <h3>Lorem Ipsum</h3>
                <div className="showcase-content">
                    <div className="showcase-box-left">Div 1</div>
                    <div className="showcase-box-right">Div 2</div>
                </div>
            </div>
        </div>
    );
};


export default BookShowcase;
