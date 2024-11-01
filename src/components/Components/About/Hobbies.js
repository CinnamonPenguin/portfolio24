import React from 'react';
import '../../Styles/About/Hobbies.css'
import Guitar from "../../../Assets/Images/guitar.svg";
import Plane from "../../../Assets/Images/paper-plane.svg";
import Pencil from "../../../Assets/Images/pencil.svg";
import Pen from "../../../Assets/Images/pen.svg";
import Location from "../../../Assets/Images/location.svg";
import Gaming from "../../../Assets/Images/gaming.svg";
import Walking from "../../../Assets/Images/walking.svg";
import backgroundImage from "../../../Assets/Images/blokhuispoort.jpg";
import OutlineButton from "../OutlineButton";
import walking from "../../../Assets/Images/walking.svg"

const Hobbies = () => {
    const items = [
        { image: Guitar, text: 'Hobby 2' },
        { image: Plane, text: 'Hobby 3' },
        { image: Gaming, text: 'Hobby 4' },
        { image: Pencil, text: 'Hobby 5' },
        { image: Walking, text: 'Hobby 1' },
        { image: Pen, text: 'Hobby 6' },
    ];



    return (
        <section className="hobbies-banner">
            <div className="hobbies-title">
                <h3>Hobbies</h3>
                <p>fuckity</p>
            </div>
            <div className="hobbies-container content">

                <div className="hobbies-grid">
                    {items.map((item, index) => (
                        <div key={index} className="hobby-grid-item">
                            <img src={item.image} alt={item.text}/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hobbie-container-blob"></div>
        </section>
    );
};
export default Hobbies;
