import React, { useState, useEffect } from 'react';
import Quote from './Quote';
import '../Styles/QuotesCarousel.css';

const quotes = [
    { text: ["Less is more, and <span class='highlight-blue'>more is more.</span>", "It's the middle that's no good"], author: " - Paula Scher" },
    { text: ["Tumble out of bed stumble to the <span class='highlight-blue'>kitchen.</span>", "Pour myself a cup of <span class='highlight-pink'>ambition.</span"], author: " - Dolly Parton" },
    { text: ["There are three choices in this life:", "be <span class='highlight-blue'>good</span>, get <span class='highlight-pink'>good</span>,", "or <span class='highlight-blue'>give up.</span>"], author: " - Gregory House" },
    { text: ["I did it", "<span class='highlight-lila'>my way.</span>"], author: " - Frank Sinatra" },
    { text: ["We don't make <span class='highlight-blue'>mistakes</span>.", "Just happy little <span class='highlight-pink'>accidents</span>."], author: " - Bob Ross" },
    { text: ["Are you sure <span class='highlight-blue'>Hank</span>", " done it this way?"], author: " - Waylon Jennings" }
];

function QuotesCarousel() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const quoteChangeInterval = 4000;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, quoteChangeInterval);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="quotes-container">
            <div className="quotes-carousel">
                <Quote
                    text={quotes[currentQuoteIndex].text}
                    author={quotes[currentQuoteIndex].author}
                />
            </div>
        </div>
    );
}

export default QuotesCarousel;
