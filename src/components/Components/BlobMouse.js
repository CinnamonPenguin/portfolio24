import '../Styles/BlobMouse.css';
import {useEffect} from "react";


function Home() {

    useEffect(() => {
        const blob = document.getElementsByClassName("blob")[0];

        const handlePointerMove = event => {
            const { pageX, pageY } = event;

            blob.animate({
                left: `${pageX}px`,
                top: `${pageY}px`
            }, { duration: 3000, fill: "forwards" });
        };

        window.addEventListener("pointermove", handlePointerMove);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <div className="home-page">
            <div className="blob"></div>
        </div>
    );
}

export default Home;
