import React from 'react';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';

const Signup = () => {
  return (
    <div>
      <div>Sign Up</div>
      <form>
        <div>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <button type="submit">Join</button>
        </div>
      </form>
      <div id="oauth-box">
        <div className="oauth-btn">
          <img src={Google} className="icon" />
          Continue with Google
        </div>
        <div className="oauth-button">
          <img src={Github} className="icon" />
          Continue with Github
        </div>
      </div>
      <p>
        Already on Shareworthy? <a href="/login">Sign in</a>
      </p>
    </div>
  );
};

export default Signup;
