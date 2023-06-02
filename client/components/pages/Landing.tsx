import React from 'react';
import '../../stylesheets/components/Landing.scss';

import Login from './Login';
import Signup from './Signup';


// home page for logged out users

const Landing = () => {
    return (
      <>
        <h2>I am the LANDING PAGE!</h2>
  
        <p>YOU are NOT logged in!!!!</p>
  
        <Signup />
        <Login />
   
  
        {/*
        <AskForSuggestion />
        <Recommend /> */}
      </>
    );
  };


export default Landing;