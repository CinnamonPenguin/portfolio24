import React from 'react';
import '../Styles/ContactBanner.css';
import backgroundImage from '../../Assets/Images/blokhuispoort.jpg';

import Button from "./Button";
import OutlineButton from "./OutlineButton";

const ContactBanner = () => {
    return (
        <section
            className="contact-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <span className="background-overlay"></span>
            <div className="container content">
                <h2>Creatief. Functioneel. Uniek.</h2>
                <p>Elk project begint met een creatief idee en eindigt met perfectie!</p>
                <OutlineButton text="Dat wil ik ook!" />
            </div>
        </section>
    );
};

export default ContactBanner;
