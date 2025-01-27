import React, { useEffect, useState } from 'react';

const TypingEffect = ({lines}) => {

    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (index < lines.length) {
                setDisplayedText((prevText) => prevText + lines[index]);
                setIndex(index + 1);
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust the speed (in ms) here

        return () => clearInterval(typingInterval);
    }, [index, lines]);

    const formatTextWithBreaks = (text) => {
        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    };

    return (
        <div>
            <div>{formatTextWithBreaks(displayedText)}</div>
        </div>
    )
}

export default TypingEffect