import React from 'react';
import '../Styles/Skillset.css';
import { ReactComponent as CodeSkill } from '../../Assets/Images/code-skill.svg';
import { ReactComponent as DesignSkill } from '../../Assets/Images/design-skill.svg';
import { ReactComponent as ManagementSkill } from '../../Assets/Images/management-skill.svg';
import OutlineButton from "./OutlineButton";

const Skillset = () => {
    return (
        <div className="skillset-container">
            <h2 className="skillset-title">
                <span className="highlight-pink">Skill</span>set
            </h2>

            <p className="skillset-description">
                Door de jaren heen heb ik veel ervaring opgedaan, van grafisch design tot coderen.
            </p>

            <div className="skillset-grid">
                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <CodeSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">front-end development</h5>
                    <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
                </div>

                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <DesignSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">Graphic Design</h5>
                    <p>Grafisch vormgever geweest voor o.a. het Leeuwarder Koor en Merchandise & Entertainment.</p>
                </div>

                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <ManagementSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">Project Management</h5>
                    <p>Van Manager Domino's Leeuwarden tot Project Manager in de ICT.</p>
                </div>

                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <CodeSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">Prototyping</h5>
                    <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
                </div>

                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <CodeSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">UI/UX Design</h5>
                    <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
                </div>

                <div className="skillset-grid-item">
                    <div className="icon-circle">
                        <CodeSkill className="skill-icon"/>
                    </div>
                    <h5 className="skill-item-title">creative writing</h5>
                    <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
                </div>

            </div>

            {/*<OutlineButton text="Download CV" />*/}
        </div>
    );
};

export default Skillset;


// import React, { useEffect } from 'react';
// import '../Styles/Skillset.css';
// import { ReactComponent as CodeSkill } from '../../Assets/Images/code-skill.svg';
// import { ReactComponent as DesignSkill } from '../../Assets/Images/design-skill.svg';
// import { ReactComponent as ManagementSkill } from '../../Assets/Images/management-skill.svg';
// import {Outlet} from "react-router-dom";
// import OutlineButton from "./OutlineButton";
//
// const Skillset = () => {
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const cards = document.querySelectorAll('.grid-item');
//
//             cards.forEach(card => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
//
//                 card.style.setProperty('--mouse-x', `${x}px`);
//                 card.style.setProperty('--mouse-y', `${y}px`);
//             });
//         };
//
//         // Attach mouse move event
//         document.getElementById('skillset-container').addEventListener('mousemove', handleMouseMove);
//
//         // Clean up the event listener
//         return () => {
//             document.getElementById('skillset-container').removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);
//
//     return (
//         <div id="skillset-container" className="skillset">
//             {/*<h2 className="skillset-title">Skillset</h2>*/}
//             <h2 className="skillset-title">
//                 <span className="highlight-pink">Skill</span>set
//             </h2>
//
//             <p className="skillset-description">
//                 Door de jaren heen heb ik veel ervaring opgedaan, van grafisch design tot coderen.
//             </p>
//             <div className="skillset-grid">
//                 <div className="grid-item">
//                     <CodeSkill className="skill-icon"/>
//                     <h3>Code</h3>
//                     <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
//                 </div>
//                 <div className="grid-item">
//                     <DesignSkill className="skill-icon"/>
//                     <h3>Design</h3>
//                     <p>Grafisch vormgever geweest voor o.a. het Leeuwarder Koor en Merchandise & Entertainment.</p>
//                 </div>
//                 <div className="grid-item">
//                     <ManagementSkill className="skill-icon"/>
//                     <h3>Management</h3>
//                     <p>Van Manager Domino's Leeuwarden tot Project Manager in de ICT.</p>
//                 </div>
//             </div>
//             <OutlineButton text="download cv" />
//         </div>
//     );
// };
//
// export default Skillset;

// import React, { useEffect } from 'react';
// import '../Styles/Skillset.css';
// import { Outlet } from "react-router-dom";
// import OutlineButton from "./OutlineButton";
//
// const Skillset = () => {
//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             const cards = document.querySelectorAll('.grid-item');
//
//             cards.forEach(card => {
//                 const rect = card.getBoundingClientRect();
//                 const x = e.clientX - rect.left;
//                 const y = e.clientY - rect.top;
//
//                 card.style.setProperty('--mouse-x', `${x}px`);
//                 card.style.setProperty('--mouse-y', `${y}px`);
//             });
//         };
//
//         document.getElementById('skillset-container').addEventListener('mousemove', handleMouseMove);
//
//         return () => {
//             document.getElementById('skillset-container').removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);
//
//     return (
//         <div id="skillset-container" className="skillset">
//             <h2 className="skillset-title">
//                 <span className="highlight-pink">Skill</span>set
//             </h2>
//
//             <p className="skillset-description">
//                 Door de jaren heen heb ik veel ervaring opgedaan, van grafisch design tot coderen.
//             </p>
//             <div className="skillset-grid">
//                 <div className="grid-item code-skill skill-icon">
//                     <h3><span className='highlight-blue'>Code</span> </h3>
//                     <p>HBO informatica gevolgd aan NHL Stenden in Emmen.</p>
//                 </div>
//                 <div className="grid-item design-skill skill-icon">
//                     <h3><span className='highlight-blue'>Design</span></h3>
//                     <p>Grafisch vormgever geweest voor o.a. het Leeuwarder Koor en Merchandise & Entertainment.</p>
//                 </div>
//                 <div className="grid-item management-skill skill-icon">
//                     <h3><span className='highlight-blue'>Management</span></h3>
//                     <p>Van Manager Domino's Leeuwarden tot Project Manager in de ICT.</p>
//                 </div>
//             </div>
//             <OutlineButton text="download cv" />
//         </div>
//     );
// };
//
// export default Skillset;
