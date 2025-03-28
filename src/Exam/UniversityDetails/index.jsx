import React from "react";
import "./index.css";

const UniversityDetails = () => {
  return (
    <div className="university-container">
      <div className="logo-section">
        <div className="logo-circle">
          <img
            src="https://www.bmusurat.ac.in/wp-content/uploads/2021/10/bhagwan-mahavir-university-logo.png"
            alt="BMU Logo"
            className="bmu-logo"
          />
        </div>
      </div>
      <div className="details-section">
        <span className="university-name">Bhagwan Mahavir University</span>
        <h2 className="exam-title">Mid Term CIA 2 Exam April - 2024</h2>
        <div className="semester-info">
          <span>Semester 1</span>
          <span className="separator">|</span>
          <span>Batch 2022-25</span>
        </div>
      </div>
      <div className="program-section">
        <div className="program-item">
          <span>Bachelor of Vocation</span>
        </div>
        <div className="program-item">
          <span>Practical Accounting, Taxation & Tally</span>
        </div>
      </div>
    </div>
  );
};

export default UniversityDetails;
