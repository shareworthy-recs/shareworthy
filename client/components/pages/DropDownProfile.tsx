import React, { useState } from 'react';
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
          <a href="/profile" className="dropdown-link">
            Profile
          </a>
          <a href="/settings" className="dropdown-link">
            Settings
          </a>
          <a href="/auth/logout" className="dropdown-link">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
