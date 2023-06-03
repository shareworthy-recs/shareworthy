import React from 'react';
import '../../stylesheets/components/RecommendationList.scss';

const RecommendationList = () => {
  return (
    <>
      <h2>Recommendations You've Made</h2>

      <div id="recs-main-container">
        <div id="recs-cards-container-1">
          <div className="recs-cards">
            <div>Question: Who is the best rap artist of all time</div>
            <div className="rec-answer">Recommendation: Nas</div>
          </div>
          <div className="recs-cards">
            <div>Question: Best restaurant in Los Angeles</div>
            <div className="rec-answer">Recommendation: Girl and The Goat</div>
          </div>
          <div className="recs-cards">
            <div>Question: What's the best hack hour?</div>
            <div className="rec-answer">Recommendation: Number of Islands</div>
          </div>
        </div>
        <div id="recs-cards-container-2">
          <div className="recs-cards">
            <div>
              Question: New York, New Haven, California, Detroit, or Chicago
              Style Pizza ?
            </div>
            <div className="rec-answer">Recommendation: New York Pizza</div>
          </div>
          <div className="recs-cards">
            <div>Question: Where does the general keep his armies?</div>
            <div className="rec-answer">Recommendation: In His Sleavies</div>
          </div>
          <div className="recs-cards">
            <div>Question: Which pokemon is best</div>
            <div className="rec-answer">Recommendation: Alakazam</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationList;
