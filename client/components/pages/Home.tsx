import React, { useState} from 'react';
import '../../stylesheets/components/Home.scss';
import { Collapse } from 'react-bootstrap';

import SuggestionList from './SuggestionList';
import RecommendationList from './RecommendationList';
// home page for logged IN users

const Home = () => {



  return (
    <>


      <RecommendationList />

      <SuggestionList />


    </>
  );
};

export default Home;
