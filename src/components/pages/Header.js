import React, { useEffect, useState } from 'react';
import '../Styles/Header.css';
import { Link, NavLink } from "react-router-dom";
import Button from "../Components/Button";
import logo from "../../Assets/Images/Title-04.svg";
import OutlineButton from "../Components/OutlineButton";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <img src={logo} alt="Logo image" className="logo-image"><NavLink to="/home"></NavLink></img>
                <nav className="navbar-container">
                    <ul className="navbar-links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/creative">Creative</NavLink></li>
                        <li><NavLink to="/coder">Coder</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    </ul>
                </nav>
                {/*<Button text="Contact" link="/contact"/>*/}
                <OutlineButton text="Contact" link="/contact"/>

            </div>
        </header>
    );
}

export default Header;
