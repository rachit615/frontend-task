import React from "react";
import "./index.css";
const ExamHeader = () => {
  return (
    <div>
      <div className="header-title">Exam</div>

      <div className="exam-header">
        <div className="breadcrumb">
          <span>Exam</span>
          <span>/</span>
          <span>Dashboard</span>
          <span>/</span>
          <span className="current-path">
            BMU_Mid_CIA2_APR24&BVOC&PATT&I&3&5
          </span>
        </div>
        <div className="header-actions">
          <button className="search-btn">
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
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="create-exam-btn">+ Create Exam</button>
          <button className="exam-history-btn">
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
              <path d="M23 4v6h-6"></path>
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
            </svg>
            Exam History
          </button>
        </div>
      </div>
      <div className="gradient-seprator"></div>
    </div>
  );
};

export default ExamHeader;
