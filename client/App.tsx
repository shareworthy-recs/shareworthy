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
// import './App.scss';
import './stylesheets/main.scss';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AskForSuggestion />
      <Dashboard />
      <Login />
      <Recommend />
      <Signup />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/askforsuggestion" element={<AskForSuggestion />} />
        <Route path="/recomment" element={<Recommend />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
