import React, { useEffect } from 'react';
import '../Styles/Portfolio/Portfolio.css';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

import full01 from '../../Assets/Images/Portfolio/fulls/01.png';
import full02 from '../../Assets/Images/Portfolio/fulls/02.png';
import full03 from '../../Assets/Images/Portfolio/fulls/03.png';
import full04 from '../../Assets/Images/Portfolio/fulls/04.png';
import full05 from '../../Assets/Images/Portfolio/fulls/05.png';
import full06 from '../../Assets/Images/Portfolio/fulls/06.png';
import full07 from '../../Assets/Images/Portfolio/fulls/07.png';
import full08 from '../../Assets/Images/Portfolio/fulls/08.png';
import full09 from '../../Assets/Images/Portfolio/fulls/09.png';
import full10 from '../../Assets/Images/Portfolio/fulls/10.png';
import full11 from '../../Assets/Images/Portfolio/fulls/11.png';
import full12 from '../../Assets/Images/Portfolio/fulls/12.png';

import thumb01 from '../../Assets/Images/Portfolio/thumbs/01.png';
import thumb02 from '../../Assets/Images/Portfolio/thumbs/02.png';
import thumb03 from '../../Assets/Images/Portfolio/thumbs/03.png';
import thumb04 from '../../Assets/Images/Portfolio/thumbs/04.png';
import thumb05 from '../../Assets/Images/Portfolio/thumbs/05.png';
import thumb06 from '../../Assets/Images/Portfolio/thumbs/06.png';
import thumb07 from '../../Assets/Images/Portfolio/thumbs/07.png';
import thumb08 from '../../Assets/Images/Portfolio/thumbs/08.png';
import thumb09 from '../../Assets/Images/Portfolio/thumbs/09.png';
import thumb10 from '../../Assets/Images/Portfolio/thumbs/10.png';
import thumb11 from '../../Assets/Images/Portfolio/thumbs/11.png';
import thumb12 from '../../Assets/Images/Portfolio/thumbs/12.png';

const Creative = () => {

    useEffect(() => {
        // Initialize GLightbox when the component mounts
        const lightbox = GLightbox({
            selector: 'a[data-glightbox]',
            touchNavigation: true,
            loop: true,
            zoomable: true,
            width: '90vw',
        });

        // Cleanup function to destroy GLightbox when component unmounts
        return () => {
            if (lightbox) lightbox.destroy();
        };
    }, []);

    const galleryItems = [
        { full: full01, thumb: thumb01, title: "2023 - Johnny Cash x Cyberpunk" },
        { full: full02, thumb: thumb02, title: "2023 - Fingerprint art" },
        { full: full03, thumb: thumb03, title: "2021 - Trouble's Just Begun boek + cover" },
        { full: full04, thumb: thumb04, title: "2020 - Flat Art" },
        { full: full05, thumb: thumb05, title: "2020 - Character Design" },
        { full: full06, thumb: thumb06, title: "2021 - Hermitcraft x MumboJumbo letter art" },
        { full: full07, thumb: thumb07, title: "2020 - Kerstkaart" },
        { full: full08, thumb: thumb08, title: "2020 - London Letter Art" },
        { full: full09, thumb: thumb09, title: "2022 - Big Eyes Retro Poster" },
        { full: full10, thumb: thumb10, title: "2022 - Boatem Pole Punk Poster" },
        { full: full11, thumb: thumb11, title: "2023 - Addiction Personal Art" },
        { full: full12, thumb: thumb12, title: "2019 - Sansinga Logo" }
    ];

    return (
        <div className="portfolio-container">
            {galleryItems.map((item, index) => (
                <a
                    key={index}
                    href={item.full}
                    data-glightbox={`title: ${item.title}`}
                    data-gallery="gallery1" // Grouping images
                    className="example-image-link"
                >
                    <img className="example-image" src={item.thumb} alt={item.title} />
                </a>
            ))}
        </div>
    );
};

export default Creative;
