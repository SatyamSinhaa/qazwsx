import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './CounterPage.css'
import Butterfly from '../components/Butterfly';

const P1 = () => {
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
                navigate("/p2");
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

export default P1
