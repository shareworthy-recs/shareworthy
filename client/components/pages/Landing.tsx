import React from 'react';
import '../../stylesheets/components/Landing.scss';

import Login from './Login';
import Signup from './Signup';

// home page for logged out users

const Landing = () => {
  return (
    <>
      <Login />
      {/*
        <AskForSuggestion />
        <Recommend /> */}
    </>
  );
};

export default Landing;
