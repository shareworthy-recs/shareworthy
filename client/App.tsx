import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import {
//   Navbar,
//   AskForSuggestion,
//   Homepage,
//   Login,
//   Recommend,
//   Signup,
// } from './components/pages';

import Navbar from './components/pages/Navbar';
import AskForSuggestion from './components/pages/AskForSuggestion';
import Homepage from './components/pages/Homepage';
import Login from './components/pages/Login';
import Recommend from './components/pages/Recommend';
import Signup from './components/pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/askforsuggestion" element={<AskForSuggestion />} />
        <Route path="/recomment" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
