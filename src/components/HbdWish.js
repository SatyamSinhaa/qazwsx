import React from 'react'
import './HbdWish.css'
import { useSpring, animated } from "@react-spring/web";

const HbdWish = () => {
    const bounce = useSpring({
        from: { transform: "translateY(-50px)" },
        to: { transform: "translateY(0px)" },
        config: { tension: 180, friction: 12 },
        loop: true,
    });

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });
    return (
        <div className="birthday-container">
            {/* <animated.h1 style={{ ...fadeIn, color: "#FF69B4", fontSize: "3rem" }}>
                🎉 Happy Birthday! 🎂
            </animated.h1>
            <animated.div style={bounce}>
                <p className="confetti">✨ 🎊 🎉 🎁 🎈</p>
            </animated.div>
            <p className="tagline">Wishing you a day filled with love and joy!</p> */}



            <h1 className="birthday-text">🎉 Happy Birthday! 🎂</h1>
            <p className="tagline">Wishing you a day filled with love and joy!</p>
        </div>
    )
}

export default HbdWish
