import React from 'react';
import '../styles/NavbarStyles.scss';

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
    </nav>
  );
};

export default Navbar;
