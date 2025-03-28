import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-greeting">Hello Rachit!</div>
        <div className="header-welcome">Welcome to Skill College</div>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>

      <div className="header-right">
        <div className="notification-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z"></path>
            <path d="M16 16a3 3 0 0 1-6 0"></path>
            <path d="M6 16h12"></path>
          </svg>
          <span className="notification-badge">5</span>
        </div>

        <div className="notification-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          <span className="notification-badge">157</span>
        </div>

        <div className="profile-dropdown">
          <span>Student Profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
          <img
            src="/images/myimage.jpeg"
            alt="Profile"
            className="profile-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
