import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import HbdWish from '../components/HbdWish';
import song from '../components/assets/song.mp3'
import sansat from '../components/assets/sansat.jpg';
import sansat2 from '../components/assets/sansat2.jpg';
import s1 from '../components/assets/s1.jpg';
import s2 from '../components/assets/s2.jpg';
import s3 from '../components/assets/s3.jpg';
import s4 from '../components/assets/s4.jpg';
import s5 from '../components/assets/s5.jpg';
import s6 from '../components/assets/s6.jpg';
import s7 from '../components/assets/s7.jpg';
import s8 from '../components/assets/s8.jpg';
import s9 from '../components/assets/s9.jpg';
import s10 from '../components/assets/s10.jpg';
import s11 from '../components/assets/s11.jpg';
import s12 from '../components/assets/s12.jpg';
import s13 from '../components/assets/s13.jpg';
import s14 from '../components/assets/s14.jpg';
import s15 from '../components/assets/s15.jpg';
import s16 from '../components/assets/s16.jpg';
import s17 from '../components/assets/s17.jpg';

const P2 = () => {
    const images = [sansat, sansat2, s1, s2, s3, s4,s5, s6, s7, s8, s9, s10, s11,s12, s13, s14, s15, s16, s17];

    const [counter, setCounter] = useState(0);
    const [displayButton, setDisplayButton] = useState(false);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1, images.length)); // Prevent counter from exceeding images array length
        console.log(counter);

        if (counter >= 18) {
            setDisplayButton(true);
        }
    };

    return (
        <div>
            <audio src={song} controls autoPlay/>
            <h1>Page 2</h1>

            {/* Show text and the first image if counter >= 1 */}
            {counter >= 1 && (
                <>
                    <HbdWish />
                    <img src={sansat} alt="Sansat" height={500} />
                </>
            )}

            {/* Dynamically render images based on counter */}
            {images.slice(1, counter).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 2}`} height={500} />
            ))}

            <br/><button onClick={handleCounter}>क्लिक</button>
            {displayButton && <button onClick={() => navigate("/p3")}>अगला पृष्ठ</button>}
        </div>
    );
}

export default P2
