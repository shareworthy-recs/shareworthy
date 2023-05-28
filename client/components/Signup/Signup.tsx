import React from 'react';

const Signup = () => {
  return (
    <>
      <div>
        <div>Signup</div>
        <form>
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
        <div>
          <button>Continue with Google</button>
        </div>
        <div>
          <button>Continue with Google</button>
        </div>
        <div>
          <p>Already on Shareworthy? <a href="/Login">Sign in</a></p>
        </div>
      </div>
    </>
  );
};

export default Signup;
