import React from 'react'
import './Butterfly.css'

const Butterfly = () => {
  return (
    <div className="butterfly">
      {/* Left Wings */}
      <div className="wing left-wing top"></div>
      <div className="wing left-wing bottom"></div>

      {/* Right Wings */}
      <div className="wing right-wing top"></div>
      <div className="wing right-wing bottom"></div>

      {/* Body */}
      <div className="body"></div>

      {/* Antennae */}
      <div className="antenna left-antenna"></div>
      <div className="antenna right-antenna"></div>
    </div>
  )
}

export default Butterfly
