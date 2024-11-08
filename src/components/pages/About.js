import React, {useEffect, useState} from 'react';
import '../Styles/About.css';
import Timeline from "../Components/About/Timeline";
import AboutTopSegment from "../Components/AboutTopSegment";
import '../Styles/Home.css'
import Hobbies from "../Components/About/Hobbies";
import Experience from "../Components/About/Experience";
import Numbers from "../Components/About/Numbers";
import BookShowcase from "../Components/About/BookShowcase";
import AboutBumper2 from "../Components/About/AboutBumper2";


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
            {/*<AboutTopSegment/>*/}
            <Timeline/>
            <Hobbies />
            <Numbers />
            <AboutBumper2 />
            <Experience />
            <BookShowcase />
        </div>
    )
        ;
}

export default About;

