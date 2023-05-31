import React from 'react';
import { Link } from "react-router-dom";
import '../../stylesheets/components/Navbar.scss';
import lily from '../../assets/Lily.JPG';
import DropDownProfile from './DropDownProfile';

const Navbar = () => {
  return (
    <nav>

{/*
      <Routes>
          <Route exact path="/" element={<Dashboard />} />


*/}


      <div id="site-name">
        <Link to="/">
          <h1>Shareworthy</h1>
        </Link>
      </div>
      <div id="right-nav">

        <div>
          <Link to="/ask">
            Ask a Question?
          </Link>
        </div>

        <div>
          <Link to="/recommend">
            Recommend
          </Link>
        </div>

        <div id="user-pic">
          <Link to="/profile">
            <img src={lily} alt="user profile" />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
