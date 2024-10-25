//
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import '../Styles/Quote.css';
// import QuoteOpen from "../../Assets/Images/Quotation Marks Start.svg";
// import QuoteClose from "../../Assets/Images/Quotation Marks End.svg";
//
// const Quote = ({ text, author }) => {
//     const quoteRef = useRef(null);
//
//     useEffect(() => {
//         gsap.set(quoteRef.current, { x: '100%', opacity: 0, scale: 0.4 });
//
//         const animateQuote = () => {
//             gsap.to(quoteRef.current, {
//                 duration: 0.5,
//                 x: '0%',
//                 opacity: 1,
//                 scale: 1,
//                 onComplete: () => {
//                     gsap.to(quoteRef.current, {
//                         duration: 1,
//                         delay: 3,
//                         x: '-100%',
//                         opacity: 0,
//                         scale: 0.4,
//                     });
//                 },
//             });
//         };
//
//         animateQuote();
//
//         return () => {
//             gsap.killTweensOf(quoteRef.current);
//         };
//     }, [text, author]);
//
//     return (
//         <div className="quote-container">
//             <div className="quote" ref={quoteRef}>
//                 {text.map((line, index) => (
//                     <h2 key={index} className="quote-line" dangerouslySetInnerHTML={{ __html: line }}/>
//                 ))}
//                 <p className="author" style={{ textAlign: 'right' }}>
//                     {author}
//                 </p>
//             </div>
//         </div>
//     );
// };
//
// export default Quote;
//


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../Styles/Quote.css';

const Quote = ({ text, author }) => {
    const quoteRef = useRef(null);

    useEffect(() => {
        gsap.set(quoteRef.current, { x: '100%', opacity: 0, scale: 0.4 });

        const animateQuote = () => {
            gsap.to(quoteRef.current, {
                duration: 0.5,
                x: '0%',
                opacity: 1,
                scale: 1,
                onComplete: () => {
                    gsap.to(quoteRef.current, {
                        duration: 1,
                        delay: 3,
                        x: '-100%',
                        opacity: 0,
                        scale: 0.4,
                    });
                },
            });
        };

        animateQuote();

        return () => {
            gsap.killTweensOf(quoteRef.current);
        };
    }, [text, author]);

    return (
        <div className="quote-container">
            <div className="quote" ref={quoteRef}>
                {text.map((line, index) => (
                    <h2 key={index} className="quote-line" dangerouslySetInnerHTML={{ __html: line }}/>
                ))}
                <p className="author" style={{ textAlign: 'right' }}>
                    {author}
                </p>
            </div>
        </div>
    );
};

export default Quote;