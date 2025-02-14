import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import song from '../assets/songs/Yaaron.mp3'
import s1 from '../assets/dost/s1.jpg';
import s2 from '../assets/dost/s2.jpg';
import s3 from '../assets/dost/s3.jpg';
import s4 from '../assets/dost/s4.jpg';
import s5 from '../assets/dost/s5.jpg';
import s6 from '../assets/dost/s6.jpg';
import s7 from '../assets/dost/s7.jpg';
import s8 from '../assets/dost/s8.jpg';
import s9 from '../assets/dost/s9.jpg';
import s10 from '../assets/dost/s10.jpg';
import s11 from '../assets/dost/s11.jpg';
import s12 from '../assets/dost/s12.jpg';
import s13 from '../assets/dost/s13.jpg';
import s14 from '../assets/dost/s14.jpg';
import s15 from '../assets/dost/s15.jpg';
import s16 from '../assets/dost/s16.jpg';
import s17 from '../assets/dost/s17.jpg';
import s18 from '../assets/dost/s18.jpg';
import s19 from '../assets/dost/s19.jpg';
import s20 from '../assets/dost/s20.jpg';
import s21 from '../assets/dost/s21.jpg';
import s22 from '../assets/dost/s22.jpg';
import s23 from '../assets/dost/s23.jpg';
import s24 from '../assets/dost/s24.jpg';
import TypingEffect from '../components/TypingEffect';

const Dost = () => {
  const images = [
    { image: s1 },
    { image: s2 },
    { image: s3 },
    { image: s4 },
    { image: s5 },
    { image: s6 },
    { image: s7 },
    { image: s8 },
    { image: s9 },
    { image: s10 },
    { image: s11 },
    { image: s12 },
    { image: s13 },
    { image: s14 },
    { image: s15 },
    { image: s16 },
    { image: s17 },
    { image: s18 },
    { image: s19 },
    { image: s20 },
    { image: s21 },
    { image: s22 },
    { image: s23 },
    { image: s24 },
  ]

  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
    console.log(counter);
  };

  return (
    <div>
      <audio src={song} controls autoPlay style={{display:'none'}}/>
      <h2><TypingEffect lines={'log mere pss chugli krte he <br> or unhi ke sath sabse jyada khuss dikhte he'}/></h2>
      {images.slice(0, counter).map((image, index) => (
        <div key={index}>
          {index === 18 && <h2>baapre</h2>}
          <img src={image.image} alt={`pic ${index + 2}`} height={510} />
          {/* <h3><TypingEffect lines={image.line} /></h3> */}
        </div>
      ))}
      <button onClick={handleCounter}>click</button>
      {counter >= 25 && navigate('/together')}
    </div>
  )
}

export default Dost