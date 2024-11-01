import React, { useState, useEffect } from 'react';
import '../Styles/HeaderDesktop.css';
import logo from "../../Assets/Images/Title-04.svg";
import OutlineButton from "../Components/OutlineButton";

function HeaderDesktop() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 75) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling down
                    setIsVisible(false);
                } else {
                    // Scrolling up
                    setIsVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`header-desktop ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="header-desktop-container">
                <img src={logo} alt="Logo" className="logo-desktop" />
                <OutlineButton text="Contact" link="/contact" />
            </div>
        </header>
    );
}

export default HeaderDesktop;
