import React from 'react'
import { useNavigate } from 'react-router-dom'

const P2 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>2</h1>
            <button onClick={()=> navigate("/p3")}>go to page 3</button>
        </div>
    )
}

export default P2
