import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import song from '../assets/songs/Co2.mp3'
import s2 from '../assets/together/s2.jpg'
import s3 from '../assets/together/s3.jpg'
import s4 from '../assets/together/s4.jpg'
import s5 from '../assets/together/s5.jpg'
import s6 from '../assets/together/s6.jpg'
import s7 from '../assets/together/s7.jpg'
import s8 from '../assets/together/s8.jpg'
import s1 from '../assets/together/s1.jpg'
import s9 from '../assets/together/s9.jpg'

const Together = () => {
    const images = [
        { image: s1 },
        { image: s2 },
        { image: s3 },
        { image: s4 },
        { image: s5 },
        { image: s6 },
        { image: s7 },
        { image: s9 },
        { image: s8 },
    ]
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1)); 
        console.log(counter);
    };
    return (
        <div>
            <audio src={song} controls autoPlay style={{display:'none'}}/>
            <TypingEffect lines={'<h2>aao tumhe kuch dikhau 🤗</h2>'} />
            {images.slice(0, counter).map((image, index) => (
                <div key={index}>
                    <img src={image.image} alt={`pic ${index + 2}`} height={510} />
                    {index === 0 && <h2>kuch bi mt bol <br/> ache he ye photo</h2>}
                    {index === 1 && <h2>esa photo kyu lete he</h2>}
                    {index === 3 && <h2>kya hota he esa photo lene se</h2>}
                    {index === 4 && <h2>uummmmaaaahh</h2>}
                    {index === 5 && <h2>hath pakad liya hu 🥰</h2>}
                    {index === 6 && <h2>aapke dwara liya gaya best photo</h2>}
                    {index === 7 && <h2>or ye urvi ko bahoot pasand aya</h2>}
                    {index === 8 && <h2>say cheez 😘</h2>}
                </div>
            ))}
            {counter >= 9 && <TypingEffect lines={'<h2>bss itni hi photos he</h2>'}/>}
            {counter === 11 && navigate('/videos')}

            <button onClick={handleCounter}>click</button>
        </div>

    )
}

export default Together