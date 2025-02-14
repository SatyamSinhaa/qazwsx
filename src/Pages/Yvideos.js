import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import wajah1 from '../assets/videos/wajah tum ho 1.mp4'
import wajah2 from '../assets/videos/wajah tum ho 2.mp4'
import wajah3 from '../assets/videos/wajah tum ho 3.mp4'
import zarori from '../assets/videos/tu zarori.mp4'
import hale from '../assets/videos/hale dil.mp4'
import vada from '../assets/videos/vada raha.mp4'
import TypingEffect from '../components/TypingEffect';
import Butterfly from '../components/Butterfly';

const Yvideos = () => {
    const videos = [wajah1, hale, wajah3, wajah2, zarori, vada]
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    console.log(counter);

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
        console.log(counter);
      };
    
    return (
        <div>
            <TypingEffect lines={'<h1>videos nai he to kya hua <br> we all know that you are very good at imagining <br> so will feel it <br> Caution : thoda intense he</h1>'} />
            {videos.slice(0, counter).map((video, i) => (
                <div key={i}>
                    {i === 3 && <TypingEffect lines={"<h3>ek br or...</h3>"}/>}
                    {i === 5 && <TypingEffect lines={"<h3>don't know about this one <br> why i put this but....</h3>"}/>}
                    <video src={video} controls autoPlay height={210} />
                    
                </div>
            ))}
            <button onClick={handleCounter}>click</button>
            {counter >= 7 && <div><Butterfly/> {setTimeout(() => { navigate("/saari") }, 7000)}</div>}
        </div>
    )
}

export default Yvideos