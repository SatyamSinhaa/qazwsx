import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import P1 from './Pages/CounterPage';
import P2 from './Pages/P2';
import P3 from './Pages/P3';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P1 />} />
          <Route path='/p2' element={<P2 />} />
          <Route path='/p3' element={<P3 />} />
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
