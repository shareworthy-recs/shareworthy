import React from 'react';
import '../../stylesheets/components/Dashboard.scss';

import AskForSuggestion from './AskForSuggestion';
import Login from './Login';
import Recommend from './Recommend';
import Signup from './Signup';

const Dashboard = () => {
  return (
    <>
      <h2>I am THE DASHBOARD!</h2>

      <p>I hold a bunch of components...How you doin</p>

      {/* <Login />
      <Signup />
      <AskForSuggestion />
      <Recommend /> */}
    </>
  );
};

export default Dashboard;
