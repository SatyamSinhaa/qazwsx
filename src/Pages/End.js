import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TypingEffect from '../components/TypingEffect';

const End = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate()
  const handleCounter = () => {
    setCounter((prev) => Math.min(prev + 1)); // Prevent counter from exceeding images array length
    console.log(counter);
  };
  return (
    <div>
      
      {counter > 0 && <h1>Thanks for watching 😊</h1>}
      {counter > 1 && <h2>The End 😇</h2>}
      {counter > 2 && <h1>🙂</h1>}
      {counter > 3 && <TypingEffect lines={'<h2>kya hua 🙃</h2>'}/>}
      {counter > 5 && <TypingEffect lines={'<h2>bss itta hi tha 🫠</h2>'}/>}
      {counter > 9 && <TypingEffect lines={'<h2>bye 👋</h2>'}/>}
      {counter > 10 && <TypingEffect lines={'<h2>kya mtlab or mn he</h2>'}/>}
      {counter > 13 && <TypingEffect lines={'<h2>or kaha se lau 🤨</h2>'}/>}
      {counter > 14 && <TypingEffect lines={'<h2>chalo theek he fir <br> aa jao</h2>'}/>}
      {counter > 15 && <TypingEffect lines={'<h2>iska jimmedaar me nai hounga na <br> teri zid me jaa rhe he</h2>'}/>}
      {counter > 17 && <div>
        <TypingEffect lines={'<h2>redirecting to bonus content...</h2>'}/>
        {setTimeout(()=>navigate('/bonus'), 3000)}
        </div>}
      <button onClick={handleCounter}>click</button>
    </div>
  )
}

export default End