import React, { useState } from 'react';
import '../../stylesheets/components/Recommend.scss';

const Recommend = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendPost = { title, description, location, category };
    fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(recommendPost),
    }).then(() => {
      console.log('submitted recommended post')
    });
  };

  return (
    <div id="recommend">
      <h2>Give a Recommendation</h2>
      <form id="recommend-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
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
        <div id="signin-submit">Submit</div>
      </form>
    </div>
  );
};

export default Recommend;
