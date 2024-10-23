import React from 'react';
import '../Styles/Contact.css';
import Button from "./Button";

const ContactForm = () => {
    return (
        <div className="container contact-container">
            <div className="row mb-4">
                <div className="col contact-box">
                    <h5>Email</h5>
                    <p>Example@email.com</p>
                </div>
                <div className="col contact-box">
                    <h5>Phone Number</h5>
                    <p>+31 6 123 45 789</p>
                </div>
            </div>

            <form className="contact-form">
                <div className="row mb-3">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First Name" required />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <div className="button-container">
                    <Button text="submit" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
