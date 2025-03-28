import React, { useState } from "react";
import Tabs from "../shared/Tabs/Tabs";
import "./index.css";
import ExamPanel from "./ExamPanel";
import TimeTable from "./TimeTable";
import SignatureSheet from "./SignatureSheet";
import ExamHeader from "./ExamHeader";
import UniversityDetails from "./UniversityDetails";
import ExamTaskProgress from "./ExamTaskProgress";

const Exam = () => {
  const navigationTabs = [
    { label: "Exam Panel", component: <ExamPanel /> },
    { label: "Timetable", component: <TimeTable name={"Timetable"} /> },
    {
      label: "Eligibility Checker",
      component: <TimeTable name={"Timetable"} />,
    },
    {
      label: "Hall Ticket",
      component: <TimeTable name={"Eligibility Checker"} />,
    },
    { label: "Signature Sheet", component: <SignatureSheet /> },

    { label: "Supervisors", component: <TimeTable name={"Supervisors"} /> },
    { label: "Paper Print", component: <TimeTable name={"Paper Print"} /> },
    { label: "Paper Check", component: <TimeTable name={"Paper Print"} /> },
    { label: "Mark Entry", component: <TimeTable name={"Mark Entry"} /> },
  ];
  const [activeTab, setActiveTab] = useState(4);

  return (
    <div className="examWrapper">
      <ExamHeader />
      <div className="universityExamDetails">
        <UniversityDetails />
        <ExamTaskProgress />
      </div>
      <div className="examTabsContainer">
        <Tabs
          tabs={navigationTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="examDetailsContainer">
          {navigationTabs[activeTab].component}
        </div>
      </div>
    </div>
  );
};

export default Exam;
