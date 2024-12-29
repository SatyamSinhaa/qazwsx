import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import HbdWish from '../components/HbdWish';
import sansat from '../components/assets/sansat.jpg';
import sansat2 from '../components/assets/sansat2.jpg';
import s1 from '../components/assets/s1.jpg';
import song from '../components/assets/song.mp3'

const P2 = () => {
    // const [songs, setSongs] = useState();
    const [textVisible, setTextVisible] = useState(false);
    const [image2, setImage2] = useState(false);
    const [image3, setImage3] = useState(false);
    const [image4, setImage4] = useState(false);
    const [image5, setImage5] = useState(false);
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();

    const handleCounter = () => {
        setCounter(counter + 1);
        if (counter >= 0) {
            setTextVisible(true);
        }
        if (counter >= 1) {
            setImage2(true);
        }
        if (counter >= 2) {
            setImage3(true);
        }
    }
    // const changeSong = () => {
    //     setSongs(song); // Change the song dynamically
    // };

    return (
        <div>
            <audio src={song} controls autoPlay />
            {/* <button onClick={changeSong}>Change Song</button> */}
            <h1>page 2</h1>

            {textVisible &&
                <>
                    <HbdWish />
                    <img src={sansat} height={500} data-aos="fade-right" />
                </>}

            {image2 && <img src={sansat2} height={500} data-aos="fade-right" />}
            {image3 && <img src={s1} height={500} />}

            <button onClick={handleCounter}>click</button>


            <button onClick={() => navigate("/p3")}>go to page 3</button>
        </div>
    )
}

export default P2
