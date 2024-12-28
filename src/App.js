import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Butterfly from './components/Butterfly';
import F2 from './components/Butterfly';
import F1 from './components/F1';
import HbdWish from './components/HbdWish';
import i from './components/assets/SAVE_20240929_232534.jpg'
import vid from './components/assets/sanchi_vid.mp4'
import P1 from './Pages/CounterPage';
import P2 from './Pages/P2';
import P3 from './Pages/P3';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<P1/>} />
        <Route path='/p2' element={<P2 />} />
        <Route path='/p3' element={<P3/>} />
        {/* <Route path='/p4' element={} /> */}
        {/* <Route path='/p5' element={} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
