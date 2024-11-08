// import React, { useState } from 'react';
// import '../Styles/SlideOutMenu.css'; // Make sure to style this properly
//
// function SlideOutMenu() {
//     const [menuOpen, setMenuOpen] = useState(false);
//
//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };
//
//     return (
//         <div>
//             {/* The vertical bar on the right side */}
//             <div className={`menu-bar ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//                 <div className="hexagon">
//                     {/* You can add your SVG or image for the hexagon here */}
//                 </div>
//             </div>
//
//             {/* The slide-out menu content */}
//             <div className={`menu-content ${menuOpen ? 'open' : ''}`}>
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/creative">Creative</a></li>
//                     <li><a href="/coder">Coder</a></li>
//                     <li><a href="/funhouse">Funhouse</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
//
// export default SlideOutMenu;

import React, { useState } from 'react';
import '../../Styles/SlideOutMenu.css'; // Make sure to style this properly

function SlideOutMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            {/* Single menu-content that includes both the hexagon and the sliding menu */}
            <div className={`menu-content ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="hexagon">
                    <div className="hamburger-menu-desktop">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    {/* You can add your SVG or image for the hexagon here */}
                </div>
                <ul>
                    <li><a href="/public">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/creative">Creative</a></li>
                    <li><a href="/coder">Coder</a></li>
                    <li><a href="/funhouse">Funhouse</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default SlideOutMenu;

