import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import edit from '../assets/bonus/edit.mp4'
import s1 from '../assets/bonus/s1.jpg'
import s2 from '../assets/bonus/s2.jpg'
import s3 from '../assets/bonus/s3.jpg'
import s4 from '../assets/bonus/s4.jpg'
import s5 from '../assets/bonus/s5.jpg'
import s6 from '../assets/bonus/s6.jpg'
import TypingEffect from '../components/TypingEffect';

const Bonus = () => {
    const images = [
        { image: s1 },
        { image: s2, line: '🙄' },
        { image: s3, line: 'are' },
        { image: s5, line: 'are nahi ye kya kya aa raha he' },
        { image: s4, line: 'me nai dala hu ye sab' },
        { image: '', line: 'kuch gadbadi hui he' },
        { image: '', line: '' },
        { image: s6, line: '' },
    ]

    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1));
        console.log(counter);
    };
    return (
        <div>
            {counter < 12 &&
                <div>
                    {images.slice(0, counter).map((image, index) => (
                        <div key={index}>
                            <img src={image.image} alt={`pic ${index + 2}`} height={510} />
                            <h3>{image.line}</h3>
                        </div>
                    ))}
                    {counter >= 9 && <TypingEffect lines={'<h3>aawwww, my little princes</h3>'} />}
                    {counter >= 10 && <TypingEffect lines={'<h3> so cute</h3>'} />}
                    {counter >= 11 && <TypingEffect lines={'<h3>mera kuchu puchu</h3>'} />}
                </div>
            }
            {counter === 12 && <div>{counter >= 12 && <TypingEffect lines={'<h1>Gadbadi theek ho gai he<br><br>for better experience <br> avoid bluetooth earphones <br> because it has latency <br> it cannot sync at time</h1>'} />}</div>}

            {counter >= 13 && <div>
                <video src={edit} autoPlay controls height={500} />
                
                </div>}
            <br /><button onClick={handleCounter}>click</button>
            {counter >= 14 && navigate('/s')}
        </div>
    )
}

export default Bonus