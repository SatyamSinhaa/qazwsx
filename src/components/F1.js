import React from 'react'
import { motion } from "framer-motion";
import './F1.css'

const F1 = () => {
    return (
        <div>
            <motion.div
                className="flower"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 20, -20, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                }}
            >
                <div className="petal petal1"></div>
                <div className="petal petal2"></div>
                <div className="petal petal3"></div>
                <div className="petal petal4"></div>
                <div className="center"></div>
            </motion.div>
        </div>
    )
}

export default F1
