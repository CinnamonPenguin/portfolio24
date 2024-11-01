// import React, { useEffect, useState } from 'react';
// import '../Styles/Home.css';
// import '../Styles/BlobMouse.css';
// import HomeContainer from "../Components/HomeContainer";
// import QuotesCarousel from "../Components/QuotesCarousel";
// import Skillset from "../Components/Skillset";
// import ContactBanner from "../Components/ContactBanner";
// import Portfolio from "../Components/Portfolio";
// import Contact from "../Components/Contact";
// import Bumper from "../Components/Bumper";
//
// function Home() {
//
//     useEffect(() => {
//         const blob = document.getElementsByClassName("blob")[0];
//
//         const handlePointerMove = event => {
//             const { clientX, clientY } = event;
//
//             blob.animate({
//                 left: `${clientX}px`,
//                 top: `${clientY}px`
//             }, { duration: 3000, fill: "forwards" });
//         };
//
//         window.addEventListener("pointermove", handlePointerMove);
//
//         // Cleanup function to remove the event listener when the component unmounts
//         return () => {
//             window.removeEventListener("pointermove", handlePointerMove);
//         };
//     }, []);
//
//     return (
//         <div className="blob-container">
//             <div className="home-page">
//                 <HomeContainer/>
//                 <QuotesCarousel/>
//                 <Skillset/>
//                 <div className="section-container">
//                     <ContactBanner/>
//                     <Portfolio/>
//                     <Bumper/>
//                     <Contact/>
//                 </div>
//
//             </div>
//             <div className="blob"></div>
//         </div>
//     );
// }
//
// export default Home;
//

import React, { useEffect } from 'react';
import '../Styles/Home.css';
import '../../App.css'
import HomeContainer from "../Components/HomeContainer";
import QuotesCarousel from "../Components/QuotesCarousel";
import Skillset from "../Components/Skillset";
import ContactBanner from "../Components/ContactBanner";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Bumper from "../Components/Bumper";
import Footer from "./Footer";

function Home() {

    // useEffect(() => {
    //     const blob = document.getElementsByClassName("blob")[0];
    //
    //     const handlePointerMove = event => {
    //         const { pageX, pageY } = event; // Use pageX and pageY to track movement relative to the whole document
    //
    //         blob.animate({
    //             left: `${pageX}px`,
    //             top: `${pageY}px`
    //         }, { duration: 3000, fill: "forwards" });
    //     };
    //
    //     window.addEventListener("pointermove", handlePointerMove);
    //
    //     // Cleanup function to remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener("pointermove", handlePointerMove);
    //     };
    // }, []);

    return (
        <div className="home-page">
            <HomeContainer />
            <QuotesCarousel />
            <Skillset />
            <ContactBanner />
            <Portfolio />
            <Bumper />
            {/*<Contact />*/}
            {/*<div className="blob"></div>*/}
            <Footer />
        </div>
    );
}

export default Home;
