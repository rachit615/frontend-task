import React from "react";
import ExamSheetCard from "./SignatureSheetCard";
import "./index.css";

const SignatureSheet = () => {
  return (
    <div className="signature-sheet-container">
      {Array.from({ length: 6 }).map((_, index) => (
        <ExamSheetCard key={index} />
      ))}
    </div>
  );
};

export default SignatureSheet;
