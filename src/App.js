import React from 'react';

import './reset.css';
import './universal.css';

import {Routes, Route, Navigate} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProcessPage from './pages/ProcessPage'
import Nav from './components/nav/Nav'
import OmosPage from './pages/OmosPage'

function App() {
  return (
    <main> 
      <Nav />
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/process" element={<ProcessPage />}/>
          <Route path="/om-os" element={<OmosPage />}/>
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
