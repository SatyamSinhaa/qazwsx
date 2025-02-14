import React from 'react'
import './Pig.css';

const Pig = () => {
  return (
    <div className="pig">
      {/* Pig Body */}
      <div className="body">
        {/* Head */}
        <div className="head">
          {/* Snout */}
          <div className="snout">
            <div className="nostril left-nostril"></div>
            <div className="nostril right-nostril"></div>
          </div>
          {/* Eyes */}
          <div className="eye left-eye"></div>
          <div className="eye right-eye"></div>
          {/* Ears */}
          <div className="ear left-ear"></div>
          <div className="ear right-ear"></div>
        </div>

        {/* Legs */}
        <div className="leg front-leg"></div>
        <div className="leg back-leg"></div>

        {/* Tail */}
        <div className="tail"></div>
      </div>
    </div>
  )
}

export default Pig