import React from 'react';
import Google from '../../assets/google.png';
import Github from '../../assets/github.png';

const Signup = () => {

  const google = () => {
    window.open('http://localhost:3000/auth/google', '_self');
  };

  const github = () => {
    window.open('http://localhost:3000/auth/github', '_self');
  };

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
        <div className="oauth-btn" onClick={google}>
          <img src={Google} className='icon' />
          Continue with Google
        </div>
        <div className="oauth-button" onClick={github}>
          <img src={Github} className='icon' />
          Continue with Google
        </div>
      </div>
      <p>Already on Shareworthy? <a href="/login">Sign in</a></p>  
    </div>
  );
};

export default Signup;