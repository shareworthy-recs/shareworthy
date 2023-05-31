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
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Recommend from './components/pages/Recommend';
import Signup from './components/pages/Signup';
import UserProfile from './components/pages/UserProfile';

import './stylesheets/main.scss';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ask" element={<AskForSuggestion />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
