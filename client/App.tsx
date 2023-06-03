import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/pages/Navbar';
import AskForSuggestion from './components/pages/AskForSuggestion';
import Dashboard from './components/pages/Home';
import Recommend from './components/pages/Recommend';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import UserProfile from './components/pages/UserProfile';
import NotFound from './components/pages/Settings';
import NotFound from './components/pages/NotFound';



import './stylesheets/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ask" element={<AskForSuggestion />} />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
