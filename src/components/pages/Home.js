import React, { useEffect } from 'react';
import '../../App.css'
import '../Styles/Home.css';
import HomeContainer from "../Components/HomeContainer";
import QuotesCarousel from "../Components/Home/QuotesCarousel";
import Skillset from "../Components/Home/Skillset";
import ContactBanner from "../Components/ContactBanner";
import Portfolio from "../Components/Home/Portfolio";
import Bumper from "../Components/Bumper";


function Home() {
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
            {/*<Footer />*/}
        </div>
    );
}

export default Home;
