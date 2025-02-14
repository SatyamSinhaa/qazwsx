import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import s1 from '../assets/comment2/s1.jpg'
import s2 from '../assets/comment2/s2.jpg'
import s3 from '../assets/comment2/s3.jpg'
import s4 from '../assets/comment2/s4.jpg'
import s5 from '../assets/comment2/s5.jpg'
import s6 from '../assets/comment2/s6.jpg'
import s7 from '../assets/comment2/s7.jpg'
import s8 from '../assets/comment2/s8.jpg'
import s9 from '../assets/comment2/s9.jpg'
import s10 from '../assets/comment2/s10.jpg'
import s11 from '../assets/comment2/s11.jpg'
import s12 from '../assets/comment2/s12.jpg'
import s13 from '../assets/comment2/s13.jpg'
import s14 from '../assets/comment2/s14.jpg'
import s15 from '../assets/comment2/s15.jpg'
import s16 from '../assets/comment2/s16.jpg'
import s17 from '../assets/comment2/s17.jpg'
import s18 from '../assets/comment2/s18.jpg'
import s19 from '../assets/comment2/s19.jpg'
import s20 from '../assets/comment2/s20.jpg'
import s21 from '../assets/comment2/s21.jpg'
import s22 from '../assets/comment2/s22.jpg'
import s23 from '../assets/comment2/s23.jpg'
import s24 from '../assets/comment2/s24.jpg'
import s25 from '../assets/comment2/s25.jpg'
import s26 from '../assets/comment2/s26.jpg'
import s27 from '../assets/comment2/s27.jpg'
import s28 from '../assets/comment2/s28.jpg'
import s29 from '../assets/comment2/s29.jpg'
import s30 from '../assets/comment2/s30.jpg'
import s31 from '../assets/comment2/s31.jpg'
import s32 from '../assets/comment2/s32.jpg'
import s33 from '../assets/comment2/s33.jpg'
import s34 from '../assets/comment2/s34.jpg'
import s35 from '../assets/comment2/s35.jpg'
import s36 from '../assets/comment2/s36.jpg'
import s37 from '../assets/comment2/s37.jpg'
import TypingEffect from '../components/TypingEffect';

const Comments2 = () => {
    const images = [
        {image:s2, line:'daat mt dikha jyada'},
        {image:s1, line:'ab sahi se bhejna sikh gai, front & back'},
        {image:s3, line:'mana kiya na, fir daat dikha rhi'},
        {image:s4, line:'camera ka kuch setting he, vrne itta patli nai he'},
        {image:s5, line:'isko koi toilet lekr jao yr, sube me krke nai nikalti'},
        {image:s6, line:'kya chupa rhi he'},
        {image:s7, line:'ohh baal dikha rhi he'},
        {image:s8, line:'baal to dikha di na fir kya, small ass'},
        {image:s9, line:'mere sath reh ke bi pappi dena nai sikhi'},
        {image:s10, line:'edit kiya tha isko to pasand nai aya'},
        {image:s11, line:'vo ghutna kyu utha hua he, or mobile ko rakh ke photo liya kr na'},
        {image:s12, line:'frame hi bekaar he'},
        {image:s13, line:'hava aa rhi kya side se'},
        {image:s14, line:'ye konsa pose he'},
        {image:s15, line:'pragnent lady vala dress'},
        {image:s16, line:'per dard krega madam ji, niche kr lo'},
        {image:s17, line:'or dusra location nai mila, parking me hi shuru ho gai'},
        {image:s18, line:'dam nai he'},
        {image:s19, line:'muthi marne vala pose he'},
        {image:s20, line:'jabardasti pakad li he, uske face pe dikh raha pasand nai aa raha usko'},
        {image:s21, line:'sibani kya 2 jhapad de ke bithai thi'},
        {image:s22, line:'ye photo me linkedin se churaya tha'},
        {image:s23, line:'ye mail ka photo tha ek vkt pe'},
        {image:s24, line:'ye dress pehen ke ek br mere se milne aai thi'},
        {image:s25, line:'saari photos me ye pehli photo he jisko dekh ke me socha ki ye ladki sundar to he'},
        {image:s26, line:'jab dekho restraunt'},
        {image:s27, line:'aawwwwwww'},
        {image:s28, line:'udne ka mn he kya'},
        {image:s29, line:'isi bridge me kitne br jaegi'},
        {image:s30, line:'lagta he ab to ud hi jaegi, vo bi is bechari ko leke'},
        {image:s31, line:'khobsoorat'},
        {image:s32, line:'apne mammi se bi choti he'},
        {image:s33, line:'piche to dekho'},
        {image:s34, line:'itna aalsi he ki khade nai hua ja raha '},
        {image:s35, line:'dress kam bra he'},
        {image:s36, line:'yrr kitne br potty ladti he tujhe'},
        {image:s37, line:'itni badi badi aankhe, me to drr gaya'},
    ]
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
        console.log(counter);
    };

    return (
        <div>
            <h2>thoda or bolna chahta hu</h2>
            {images.slice(0, counter).map((image, index) => (
                <div key={index}>
                    <img src={image.image} alt={`pic ${index + 2}`} height={510} />
                    <h3><TypingEffect lines={image.line} /></h3>
                </div>
            ))}
            <button onClick={handleCounter}>click</button>
            {counter >= 38 && navigate('/dost')}
        </div>
    )
}

export default Comments2