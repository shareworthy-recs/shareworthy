import React, { useState } from 'react';
import profile from './profile.jpg';
import './DropDownProfileStyles.scss';

const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <img
        className="profile-image"
        src={profile}
        alt='Profile'
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-box">
          <a href="/profile" className="dropdown-link">
            Profile
          </a>
          <a href="/settings"className="dropdown-link">
            Settings
          </a>
          <a href="/logout" className="dropdown-link">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
