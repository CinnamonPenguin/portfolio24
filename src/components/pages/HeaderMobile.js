// import React, { useState, useEffect } from 'react';
// import '../Styles/HeaderMobile.css';
// import logo from "../../Assets/Images/Title-04.svg";
//
// function Header() {
//     return (
//         <header className="header-mobile">
//             <div className="header-mobile-container">
//                 <img src={logo} alt="Logo" className="logo-mobile" />
//             </div>
//             <div className="hamburger-menu">
//
//             </div>
//         </header>
//     );
// }
//
// export default Header;

// Werkt soort van
// import React, { useState } from 'react';
// import '../Styles/HeaderMobile.css';
// import logo from "../../Assets/Images/Title-04.svg";
//
// function HeaderMobile() {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
//
//     return (
//         <header className="header-mobile">
//             <div className="header-mobile-container">
//                 <img src={logo} alt="Logo" className="logo-mobile" />
//                 <div className="hamburger-menu" onClick={toggleMenu}>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                     <span className="bar"></span>
//                 </div>
//             </div>
//
//             {/* Full-screen menu when hamburger is clicked */}
//             <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#creative">Creative</a></li>
//                     <li><a href="#coder">Coder</a></li>
//                     <li><a href="#funhouse">Funhouse</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }
//
// export default HeaderMobile;


import React, { useState } from 'react';
import '../Styles/HeaderMobile.css';
import logo from "../../Assets/Images/Title-04.svg";

function HeaderMobile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header-mobile">
            <div className="header-mobile-container">
                <img src={logo} alt="Logo" className="logo-mobile" />
                <div className="menu-square" onClick={toggleMenu}>
                    <div className="hamburger-menu">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>

            {/* Full-screen menu */}
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-links">
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#creative" onClick={toggleMenu}>Creative</a></li>
                    <li><a href="#coder" onClick={toggleMenu}>Coder</a></li>
                    <li><a href="#funhouse" onClick={toggleMenu}>Funhouse</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderMobile;
