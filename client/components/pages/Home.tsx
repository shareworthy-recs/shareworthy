import React from 'react';
import '../../stylesheets/components/Home.scss';

import SuggestionList from './SuggestionList';
import RecommendationList from './RecommendationList';
// home page for logged IN users

const Home = () => {
  return (
    <>
      <h2>I am HOME!</h2>
      <p>I hold a bunch of components...How you doin</p>
      <SuggestionList />

      <RecommendationList />
    </>
  );
};

export default Home;
