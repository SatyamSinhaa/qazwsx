import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import s1 from '../assets/saari/s1.jpg';
import s2 from '../assets/saari/s2.jpg';
import s3 from '../assets/saari/s3.jpg';
import s4 from '../assets/saari/s4.jpg';
import s5 from '../assets/saari/s5.jpg';
import s6 from '../assets/saari/s6.jpg';
import s7 from '../assets/saari/s7.jpg';
import s8 from '../assets/saari/s8.jpg';
import s9 from '../assets/saari/s9.jpg';
import TypingEffect from '../components/TypingEffect';

const Saari = () => {
    const images = [
        { image: s3 },
        { image: s5 },
        { image: s1 },
        { image: s4 },
        { image: s2 },
        { image: s7 },
        { image: s6 },
        { image: s8 },
        { image: s9 },
    ]
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
        console.log(counter);
    };
    return (
        <div>
            <h2><TypingEffect lines={'Saari pehnna ata he ?'}/></h2>
            {images.slice(0, counter).map((image, index) => (
                <div key={index}>
                    <img src={image.image} alt={`pic ${index + 2}`} height={510} />
                </div>
            ))}
            {counter >= 10 && <TypingEffect lines={'<h2>बोलो न क्यों ये चाँद सितारे <br>तकते हैं यूँ मुखड़े को तुम्हारे <br> छूके बदन को हवा क्यों महकी <br> रात भी है क्यों बहकी बहकी.</h2>'}/> }
            {counter >= 13 && navigate('/end')}
            <button onClick={handleCounter}>click</button>
        </div>
    )
}

export default Saari