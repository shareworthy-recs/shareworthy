import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/components/Navbar.scss';
import lily from '../../assets/lily.png';
import logo from '../../assets/sw-greenheart.png';
import DropDownProfile from './DropDownProfile';

const Navbar = () => {
  return (
    <nav>
      <div id="site-name">
        <img
          src="../../assets/sw-greenheart.png"
          className="logo"
          alt="logo"
        />
        <Link to="/">
          <h1>Shareworthy</h1>
        </Link>
      </div>
      <div id="right-nav">
        <div>
          <Link to="/ask">Ask a Question?</Link>
        </div>

        <div>
          <Link to="/recommend">Recommend</Link>
        </div>

        <div>
          <Link to="/landing">_</Link>
        </div>
        <DropDownProfile />
      </div>
    </nav>
  );
};

export default Navbar;
