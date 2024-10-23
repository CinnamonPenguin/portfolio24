import React, { useEffect } from 'react';
import '../Styles/Home.css';
import HomeContainer from "../Components/HomeContainer";
import QuotesCarousel from "../Components/QuotesCarousel";
import Skillset from "../Components/Skillset";
import ContactBanner from "../Components/ContactBanner";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";
import Bumper from "../Components/Bumper";
import Footer from "./Footer";

function Home() {
    return (
        <div className="home-page">
            <HomeContainer />
            <QuotesCarousel />
            <Skillset />
            {/*<ContactBanner />*/}
            {/*<Portfolio />*/}
            {/*<Bumper />*/}
            {/*<Contact />*/}
            <div className="blob"></div>
            {/*<Footer />*/}
        </div>
    );
}

export default Home;
