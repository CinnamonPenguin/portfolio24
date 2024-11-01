import React, {useEffect, useState} from 'react';
import '../Styles/About.css';
import Timeline from "../Components/Timeline";
import AboutTopSegment from "../Components/AboutTopSegment";
import '../Styles/Home.css'
import Hobbies from "../Components/About/Hobbies";
import Experience from "../Components/About/Experience";
import AboutBumper from "../Components/About/AboutBumper";
import Numbers from "../Components/About/Numbers";
import BannerWithBook from "../Components/About/BannerWithBook";
import BookShowcase from "../Components/About/BookShowcase";
import Showcase from "../Components/About/Showcase";


function About() {
    const [configuration, setConfiguration] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setConfiguration(prevConfig => (prevConfig === 1 ? 2 : 1));
        }, 2500);

        return () => clearInterval(interval); // Clean up on unmount
    }, []);


    return (
        <div className="about-page">
            <AboutTopSegment/>
            <Timeline/>
            <Hobbies />
            <Numbers />
            <AboutBumper />
            <Experience />

            {/*<BannerWithBook />*/}
            <BookShowcase />
            <Showcase />
            <div className="blob"></div>
        </div>
    )
        ;
}

export default About;

