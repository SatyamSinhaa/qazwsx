import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import P1 from './Pages/Landing';
import Comments from './Pages/Comments';
import P3Reels from './Pages/Reels';
import Songs from './Pages/Songs';
import Yvideos from './Pages/Yvideos';
import Dost from './Pages/Dost';
import Saari from './Pages/Saari';
import Comments2 from './Pages/Comments2';
import Together from './Pages/Together';
import Bonus from './Pages/Bonus';
import End from './Pages/End';
import S from './Pages/S';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P1 />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/reels' element={<P3Reels />} />
          <Route path='/comments2' element={<Comments2 />} />
          <Route path='/dost' element={<Dost />} />
          <Route path='/together' element={<Together />} />
          <Route path='/videos' element={<Yvideos />} />
          <Route path='/saari' element={<Saari />} />
          <Route path='/end' element={<End />} />
          <Route path='/bonus' element={<Bonus />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/s' element={<S />} />
        </Routes>
      </BrowserRouter>
      {/* <Pig /> */}
    </div>
  );
}

export default App;
