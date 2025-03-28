import React from "react";
import "./index.css";
import ProgressBar from "../../shared/ProgressBar/ProgressBar";
import DropdownMenu from "../../shared/DropdownMenu/DropdownMenu";
const ExamTaskProgress = () => {
  const options = [
    { label: "Download Extracted data", onClick: () => {} },
    { label: "Postpone", onClick: () => {} },
    { label: "Check Exam Card", onClick: () => {} },
  ];
  return (
    <div className="exam-task-container">
      <div className="top-section">
        <div className="left-section">
          <button className="postpone-btn">Postpone</button>
          <div className="right-section">
            <button className="export-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Export Data
            </button>
            <DropdownMenu options={options} triggerClass="trigger-dots" />
          </div>
        </div>
      </div>
      <div className="task-progress">
        <div className="task-progress-left">
          <div className="task-details">
            <span className="task-label">Pre exam task :</span>
            <span className="task-count">41 / 94</span>
          </div>

          <ProgressBar progress={44} color="#dc2626" />
        </div>

        <div className="action-icons">
          <div className="chat-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div className="user-avatars">
            <div className="avatar-group">
              <img src="/images/nupur.JPG" alt="User 3" className="avatar" />
              <img src="images/user-1.png" alt="User 1" className="avatar" />
              <img src="/images/user-2.png" alt="User 2" className="avatar" />
              <div className="avatar-count">+35</div>
            </div>
          </div>
          <div className="history-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamTaskProgress;
