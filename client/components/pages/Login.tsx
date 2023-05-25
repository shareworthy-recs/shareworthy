import React from 'react';
const Login = () => {
  return (
    <>
      <div>
        <div>Sign In</div>
        <form>
          <div>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div>
          <button>Continue with Google</button>
        </div>
        <div>
          <button>Sign in with Github</button>
        </div>
      </div>
    </>
  );
};

export default Login;
