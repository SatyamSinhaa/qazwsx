import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect'
import { useNavigate } from 'react-router-dom';
import r1 from '../assets/reels/r1.mp4'
import r2 from '../assets/reels/r2.mp4'
import r3 from '../assets/reels/r3.mp4'
import r4 from '../assets/reels/r4.mp4'
import r5 from '../assets/reels/r5.mp4'
import r6 from '../assets/reels/r6.mp4'
import r7 from '../assets/reels/r7.mp4'
import r8 from '../assets/reels/r8.mp4'
import r9 from '../assets/reels/r9.mp4'
import r10 from '../assets/reels/r10.mp4'
import r11 from '../assets/reels/r11.mp4'
import Pig from '../components/Pig';

const Reels = () => {
  const reels = [r1, r2, r3, r4, r5, r6, r7, r8, r9, r10, r11]

  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(null);
  const [display, setDisplay] = useState(false);
  const handleNo = () => setFlag(false);
  const handleDisplay = () => setDisplay(true);

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
    console.log(counter);
  };

  return (
    <div>
      <TypingEffect lines={`<h1>hhhaaaaa, thack gaya 😮‍💨<br>
      or samaj bi nai aa rha kese banau aage 🤔<br>
      thoda reels dekhte he</h1>`} />

      {flag === null ? (
        <>
          <button onClick={handleDisplay}>YES</button>
          <button onClick={handleNo}>NO</button>
        </>
      ) : flag === true ? (
        <p>Flag is true! Execute code here.</p>
      ) : (
        <div>
          <h3><TypingEffect lines={"<h3>mtlab kyu... kyu nai dekhna 😒</h3>"} /> </h3>
          <button onClick={handleDisplay}>YES</button>
        </div>
      )}

      {display && <div>
        {reels.slice(0, counter).map((reel, index) => (
          <div key={index}>
            
            {index === 4 && <TypingEffect lines={'<h3>thoda ruk... aya me'} />}
            {index === 9 && <TypingEffect lines={'<h3>aa gaya <br> per ruk susu krke ata hu 😅</h3>'} />}
            <video src={reel} autoPlay controls alt={`pic ${index + 2}`} height={650} />
            {index === 2 && <TypingEffect lines={'<h3>ye reel jab jab dekhta hu 🥹</h3>'} />}
            {index === 10 && <TypingEffect lines={'<h2>aa gaya ji 😊</h2>'} />}
          </div>
        ))}
        {counter >= 13 && <TypingEffect lines={'<h1>chale ab</h1>'} />}
        {counter >= 14 && <TypingEffect lines={'<h1>per kaha jaenge</h1>'} />}
        {counter >= 15 && <TypingEffect lines={'<h1>BTW mujhpe chodh de 🤗<br> me leke jata </h1>'} />}
        {/* {counter >= 17 && <TypingEffect lines={'<h1>are button kharab ho gaya kya</h1>'} />} */}
        {counter >= 18 && <TypingEffect lines={'<h1>kharab nai hua he vo <br> thoda dabao usko</h1>'} />}
        {counter >= 21 && <div>
          <Pig />
          {/* <button>chalo</button>
          <button>nai jana</button> */}

          {setTimeout(() => { navigate("/comments2") }, 7000)}
        </div>}
          <button onClick={handleCounter}>click</button>
      </div>}
    </div>
  );
}

export default Reels
