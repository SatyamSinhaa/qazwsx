import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './CounterPage.css'

const P1 = () => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(5);
    const [textVisible, setTextVisible] = useState(false);
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
            }, 3000)
        }
    }
    const handleClick = () => {
        setTextVisible(true);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleCounter}>click me</button> <br />

            {dropFlower && <div className="flower-container">
                {/* Display flower emojis */}
                <div className="flower">🌸</div>
                <div className="flower">🌼</div>
                <div className="flower">🌺</div>
                <div className="flower">🌻</div>
            </div>}
  
            <button onClick={() => navigate("/p2")}>Go to page 2</button>
        </div>
    )
}

export default P1