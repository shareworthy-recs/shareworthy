import React from 'react';
import '../../stylesheets/components/RecommendationList.scss';

const RecommendationList = () => {
  return (
    <>
      <h2>Recommendations You've Made</h2>

      <p>Would go here... in an ideal world</p>

      <div id="recs-main-container">
        <div id="recs-cards-container-1">
          <div className="recs-cards">
            <div>Nas</div>
            <div>Description: Best Rap Artist</div>
          </div>
          <div className="recs-cards">
            <div>Title: Girl and The Goat</div>
            <div>Description: Best restaurant in Los Angeles</div>
            <div>Location: Los Angeles</div>
            <div>Category: Food
                
            </div>
          </div>
          <div className="recs-cards">
            <div>Who's better, kyle, pei or matty x?</div>
            <div></div>
          </div>
        </div>
        <div id="recs-cards-container-2">
          <div className="recs-cards">
            <div>Pizza or Donuts?</div>
            <div></div>
          </div>
          <div className="recs-cards">
            <div>Where does the general keep his armies?</div>
            <div></div>
          </div>
          <div className="recs-cards">
            <div>Jason Brown, Jason Breen, or Jason Johnson?</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationList;
