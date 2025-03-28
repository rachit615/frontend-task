import React from "react";
import "./index.css";
import DropdownMenu from "../../../shared/DropdownMenu/DropdownMenu";
const ExamSheetCard = () => {
  const options = [
    { label: "Download Signature Sheet", onClick: () => {} },
    { label: "Signature Sheet History", onClick: () => {} },
    { label: "Signature Sheet Info", onClick: () => {} },
  ];

  return (
    <div className="exam-sheet-card">
      <div className="card-header">
        <div className="status-header">
          <span className="header-text">Exam Conducted</span>
          <div className="info-icon">ⓘ</div>
        </div>
      </div>

      <div className="subject-info">
        <div className="subject-code-container">
          <div className="subject-code-wrapper">
            <div className="status-indicator">S</div>
            <div className="subject-code">
              Subject Code:{" "}
              <span className="subject-code-value">4110343181</span>
            </div>
          </div>
          <DropdownMenu options={options} />
        </div>

        <div className="subject-name">Introduction to Functional English</div>
        <div className="exam-date">
          <span className="calendar-icon">📅</span>
          Exam Date: <span className="exam-date-value">01-01-2025</span>
        </div>
      </div>

      <div className="attendance-section">
        <div className="attendance-header">
          <span className="attendance-text">Student Attendance</span>
          <span className="draft-status">Draft</span>
        </div>

        <div className="attendance-stats">
          <div className="stat-box">
            <div className="stat-label">Total Students</div>
            <div className="stat-value total-students">58</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Present Students</div>
            <div className="stat-value present-students">52</div>
          </div>
          <div className="stat-box">
            <div className="stat-label">Absent Students</div>
            <div className="stat-value absent-students">02</div>
          </div>
        </div>
      </div>

      <div className="remaining-students-notice">
        <span className="remaining-students">4 Student</span> remain for mark
        attendance
      </div>
      <div className="mark-attendance">
        <button className="mark-attendance-button">
          Mark / Edit Student's Attendance
        </button>
      </div>
    </div>
  );
};

export default ExamSheetCard;
