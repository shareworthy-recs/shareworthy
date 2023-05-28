import React from 'react';
import DropDownProfile from './DropDownProfile';
import './NavbarStyles.scss';

const Navbar = () => {  
  return (
    <nav>
      <div id="left-nav">
        <div>Shareworthy</div>
      </div>
      <div id="right-nav">
        <div>Ask a Question?</div>
        <div>Recommend</div>
      </div>
      <DropDownProfile/>
    </nav>
  );
};

export default Navbar;
