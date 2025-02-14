import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './P1.css'
import Butterfly from '../components/Butterfly';

const Landing = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);
    const [dropFlower, setDropFlower] = useState(false);

    const handleCounter = () => {
        if (counter >= 2) {
            setCounter(counter - 1);
        }
        else {
            setCounter('🥳')
            setDropFlower(true);

            setTimeout(() => {
                navigate("/comments");
            }, 5000)
        }
    }


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>CLICK</button> <br />

            {dropFlower && <div>
                <div className="flower-container">
                    <div className="flower">🌸</div>
                    <div className="flower">🌼</div>
                    <div className="flower">🌺</div>
                    <div className="flower">🌻</div>
                </div>
                <Butterfly />
            </div>}

        </div>
    )
}

export default Landing
