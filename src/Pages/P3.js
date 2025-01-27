import React, { useState } from 'react';
import TypingEffect from '../components/TypingEffect'

const P3 = () => {
  const lines = [
    // 0
    `<h1>hhhaaaaa, thack gaya</h1>
      <h1>kya kru</h1>
      <h2>scroll krte he thoda</h2>
      `,
    // 1

  ]

  const [flag, setFlag] = useState(null);
  const [display, setDisplay] = useState(false);
  const handleYes = () => setFlag(true);
  const handleNo = () => setFlag(false);
  const handleDisplay = () => setDisplay(true);

  return (
    <div>
      <TypingEffect lines={lines[0]} />

      {flag === null ? (
        <>
          <button onClick={handleYes}>YES</button>
          <button onClick={handleNo}>NO</button>
        </>
      ) : flag === true ? (
        <p>Flag is true! Execute code here.</p>
      ) : (
        <div>
          <h3>mtlab kyu... kyu nai dekhna</h3>
          <button onClick={handleDisplay}>YES</button>
        </div>
      )}

      {display && <div>slfkh</div>}
    </div>
  );
}

export default P3
