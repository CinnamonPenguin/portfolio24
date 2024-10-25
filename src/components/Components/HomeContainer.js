// import React from 'react';
// import Button from "../Components/Button";
// import heroImageOne from "../../Assets/Images/FotoWebsite.png";
// import OutlineButton from "./OutlineButton";
// import '../Styles/HomeContainer.css'
//
// const HomeContainer = () => {
//
//     return (
//         <div className="home-container">
//             <div>
//                 <h1>Creative. Coder. Curious.</h1>
//                 <p className="description">Een creatieve designer en coder. Geboren in Leeuwarden, verhuisd naar Emmen. Friese nuchterheid met Drentse flair.</p>
//                 <div className="button-container">
//                     {/*<Button text="Over mij" link="/about"/>*/}
//                     <OutlineButton text="Over mij" link="/about"/>
//                 </div>
//             </div>
//             <div>
//                 <div className="hero-image-container">
//                     <img src={heroImageOne} alt="Description of Image 1" className="heroImage"/>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default HomeContainer;

import React from 'react';
import Button from "../Components/Button";
import heroImageOne from "../../Assets/Images/FotoWebsite.png";
import OutlineButton from "./OutlineButton";
import '../Styles/HomeContainer.css'

const HomeContainer = () => {

    return (
        <div className="home-container">
            <div>
                <h1 className="home-title"><span>Creative.</span> <span>Coder.</span> <span>Curious.</span></h1>
                <p className="description">Een creatieve designer en coder. Geboren in Leeuwarden, verhuisd naar Emmen. Friese nuchterheid met Drentse flair.</p>
                <div className="button-container">
                    {/*<Button text="Over mij" link="/about"/>*/}
                    <OutlineButton text="Over mij" link="/about"/>
                </div>
            </div>
            <div>
                <div className="hero-image-container">
                    <img src={heroImageOne} alt="Description of Image 1" className="heroImage"/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;