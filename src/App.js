import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/landing/Main';
// import Globe from './pages/globe/Globe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/globe" element={<Globe />} /> */}
    </Routes>
  );
}

export default App;