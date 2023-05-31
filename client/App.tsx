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

import './stylesheets/main.scss';


function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
