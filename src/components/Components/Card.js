import React from 'react';
import '../Styles/Card.css';

const Card = ({ image, genre, title }) => {
    return (
        <div className="card">
            <img
                src={image}
                alt={title}
                className="card-image"
                onContextMenu={(e) => e.preventDefault()} // Disable right-click
            />
            <div className="card-text">
                <h5 className="card-genre">{genre}</h5>
                <h4 className="card-title">{title}</h4>
            </div>
        </div>
    );
};

export default Card;
