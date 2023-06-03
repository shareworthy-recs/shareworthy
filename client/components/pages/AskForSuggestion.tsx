import React, { useState } from 'react';
import '../../stylesheets/components/AskForSuggestion.scss';

const AskForSuggestion = () => {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const suggestionPost = { question, category };

    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(suggestionPost),
    }).then(() => {
      console.log('submitted suggestion post');
    });
  };

  return (
    <>
      <div id="ask-for-suggestion-container">
        <h2>Ask for a Suggestion</h2>
        <form id="suggestion-form" onSubmit={handleSubmit}>
          <label>What are you looking for?</label>
          <textarea
            required
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <label>Category:</label>
          <select>
            <option selected disabled>
              Choose a category
            </option>
            <option value="movie">Movie</option>
            <option value="restaurant">Restaurant</option>
            <option value="bathroom">Bathroom</option>
          </select>
          <button>Submit</button>
        </form>
      </div>

      {/* <textarea id="suggestion-box" />
      <div id="suggestion-submit">Submit</div> */}
    </>
  );
};

export default AskForSuggestion;
