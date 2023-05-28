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

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import AskForSuggestion from './components/AskForSuggestion/AskForSuggestion';
import Recommend from './components/Recommend/Recommend';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Dashboard />} />
        <Route path="/askforsuggestion" element={<AskForSuggestion />} />
        <Route path="/recomment" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
