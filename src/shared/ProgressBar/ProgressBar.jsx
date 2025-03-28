import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress = 0, color = "#dc2626" }) => {
  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
