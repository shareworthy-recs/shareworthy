import React from 'react';
import '../../stylesheets/components/Navbar.scss';
import lily from '../../assets/Lily.JPG';
import DropDownProfile from './DropDownProfile';

const Navbar = () => {
  return (
    <nav>
      <div id="left-nav">
        <div>Shareworthy</div>
      </div>
      <div id="right-nav">
        <div>Ask a Question?</div>
        <div>Recommend</div>
        <div id="user-pic">
          <img src={lily} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
