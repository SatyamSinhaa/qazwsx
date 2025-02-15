import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import HbdWish from '../components/HbdWish';
import song from '../assets/songs/Yaad.mp3'
import s2 from '../assets/comment/s2.jpg'
import s3 from '../assets/comment/s3.jpg'
import s4 from '../assets/comment/s4.jpg'
import s5 from '../assets/comment/s5.jpg'
import s6 from '../assets/comment/s6.jpg'
import s7 from '../assets/comment/s7.jpg'
import s8 from '../assets/comment/s8.jpg'
import s9 from '../assets/comment/s9.jpg'
import s10 from '../assets/comment/s10.jpg'
import s11 from '../assets/comment/s11.jpg'
import s12 from '../assets/comment/s12.jpg'
import s13 from '../assets/comment/s13.jpg'
import s14 from '../assets/comment/s14.jpg'
import s15 from '../assets/comment/s15.jpg'
import s16 from '../assets/comment/s16.jpg'
import s17 from '../assets/comment/s17.jpg'
import s18 from '../assets/comment/s18.jpg'
import s19 from '../assets/comment/s19.jpg'
import s20 from '../assets/comment/s20.jpg'
import s21 from '../assets/comment/s21.jpg'
import s22 from '../assets/comment/s22.jpg'
import s23 from '../assets/comment/s23.jpg'
import s24 from '../assets/comment/s24.jpg'
import s25 from '../assets/comment/s25.jpg'
import s26 from '../assets/comment/s26.jpg'
import s27 from '../assets/comment/s27.jpg'
import s28 from '../assets/comment/s28.jpg'
import s29 from '../assets/comment/s29.jpg'
import s30 from '../assets/comment/s30.jpg'
import s31 from '../assets/comment/s31.jpg'
import s32 from '../assets/comment/s32.jpg'

const Comments = () => {
    const images = [
        {image:s2, line:'mere se jyada sharp nai he'},
        {image:s3, line:'BTS vala ko kyu krti he'},
        {image:s4, line:'theek he... makeup thoda jyada ho gaya he'},
        {image:s5, line:'ese kyu kr rhi he, potty lagi he...'},
        {image:s6, line:'face ko cut krdi he pata nai kya dikhana chahti he'},
        {image:s7, line:'ek vakt tha jab me kiya tha, ab me replace ho gaya 😏'},
        {image:s8, line:'btw tere right pe kon he'},
        {image:s9, line:'chi chi kisse chummi le rhi he'},
        {image:s10, line:'MRF tyre lagg rhi pura, per fir bi thoda achi dikh rhi'},
        {image:s11, line:'wide body kit kaha se install ho gaya'},
        {image:s12, line:'are fir moti ho gai'},
        {image:s13, line:'love... ? 🙄'},
        {image:s14, line:'kyu piche padi rehti he black mole ke jab dekho tab 😏'},
        {image:s15, line:'ek hi photo ko 4 br laga ke kya prapt hua'},
        {image:s16, line:'ye pose thoda ajeeb nai he 😅'},
        {image:s17, line:'aaahhh..., devi ji ki to baat hi alag he'},
        {image:s18, line:'ye photo kafi mehenga pada, kyuki cut se to satisfaction hi nai mila'},
        {image:s19, line:'hairs bss dikhane the'},
        {image:s20, line:'ha ispe dikh rhe he hairs bss'},
        {image:s21, line:'are bss kr kitta dikhaegi, jabardasti mt kr ab'},
        {image:s22, line:'kuch bolunga to vivaad ho jaega, ~(6 gang)'},
        {image:s23, line:'usko pout banane ke alava kuch ata kyu nai'},
        {image:s24, line:'🤐 no comments'},
        {image:s25, line:'che che fir se BTS, btw who is the right most '},
        {image:s26, line:'chillar party'},
        {image:s27, line:'battisi kam dikha'},
        {image:s28, line:'theek he... 🥱'},
        {image:s29, line:'are kaha dekh rhi he, me vaha nai hu 😒'},
        {image:s30, line:'hmm'},
        {image:s31, line:'🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣'},
        {image:s32, line:'chota chota 🤣'},
    ]

    const [counter, setCounter] = useState(0);
    const [displayButton, setDisplayButton] = useState(false);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter((prev) => Math.min(prev + 1));
        console.log(counter);

        if (counter >= 31) {
            setDisplayButton(true);
        }
    };

    return (
        <div>
            <audio src={song} controls autoPlay style={{display:'none'}}/>

            {counter >= 1 && (
                <>
                    <HbdWish />
                </>
            )}

            {images.slice(0, counter).map((image, index) => (
                <div key={index}>
                    <img  src={image.image} alt={`pic ${index + 2}`} height={500} />
                    <h3 style={{color:'black'}}>{image.line}</h3>
                </div>
            ))}

            {counter >= 34 && <div style={{color:'red'}}>are, vo button hena usko daba na</div>}
            <br/><button onClick={handleCounter}>click</button>
            {displayButton && <button onClick={() => navigate("/reels")}>next page</button>}
        </div>
    );
}

export default Comments