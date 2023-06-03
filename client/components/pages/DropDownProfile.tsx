import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/gumby.jpg';
import '../../stylesheets/components/DropDownProfile.scss';

const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <img
        src="../../assets/lily.png"
        className="profile-image"
        alt="profile image"
        onClick={toggleDropdown}
      />

      {isOpen && (
        <div className="dropdown-box">
        <Link to="/profile" className="dropdown-link">
          Profile
        </Link>
        <Link to="/settings" className="dropdown-link">
          Settings
        </Link>
        <Link to="/auth/logout" className="dropdown-link">
          Logout
        </Link>
      </div>
      )}
    </div>
  );
};

export default DropDownProfile;
