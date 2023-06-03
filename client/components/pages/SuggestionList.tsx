import React from 'react';
import '../../stylesheets/components/SuggestionList.scss';

const SuggestionList = () => {
    return (
    <>
    <h2>Suggestion List</h2>
    <p>See your requests with links to show details for each suggestion</p>

    <div id="home-cards-main-container">
        <div id="home-cards-container-1">
          <div className="home-cards">
            <div>What is your favorite restaurant in Los Angeles?</div>
            <button>View</button>
          </div>
          <div className="home-cards">
            <div>Which place in downtown NYC has the cleanest bathrooms</div>
            <button>View</button>
          </div>
          <div className="home-cards">
            <div>Who's better, kyle, pei or matty x?</div>
            <button>View</button>
          </div>
        </div>
        <div id="home-cards-container-2">
          <div className="home-cards">
            <div>Pizza or Donuts?</div>
            <button>View</button>
          </div>
          <div className="home-cards">
            <div>Where does the general keep his armies?</div>
            <button>View</button>
          </div>
          <div className="home-cards">
            <div>Jason Brown, Jason Breen, or Jason Johnson?</div>
            <button>View</button>
          </div>
        </div>
      </div>

    </>
    );
};

export default SuggestionList;
