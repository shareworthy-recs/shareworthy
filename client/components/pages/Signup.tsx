import React from 'react';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';
import '../../stylesheets/components/Signup.scss';

const Signup = () => {
  return (
    <div id="signup-box">
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
      </form>
      <div id="oauth-box">
        <div className="oauth-button">
          <a href="/">Join</a>
        </div>
      </div>
      <div id="oauth-box">
        <div className="oauth-button">
          <a href="/auth/google">
            <img src={Google} className="icon" />
            Continue with Google
          </a>
        </div>
        <div className="oauth-button">
          <a href="/auth/github">
            <img src={Github} className="icon" />
            Continue with Github
          </a>
        </div>
      </div>
      <p>
        Already on Shareworthy? <a href="/login">Sign in</a>
      </p>
    </div>
  );
};

export default Signup;
