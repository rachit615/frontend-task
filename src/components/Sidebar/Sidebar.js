import React, { useState } from "react";
import styles from "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Exam");

  const menuItems = [
    {
      icon: "📦",
      label: "Overview",
      className: styles["sidebar-item-overview"],
    },
    { label: "Manage User" },
    { label: "Academic" },
    { label: "Time Table" },
    { label: "Attendance" },
    { label: "Help Desk" },

    { label: "Directory" },
    { label: "Exam", className: styles["sidebar-item-exam"] },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">Skill.College</div>
      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`sidebar-item ${item.className || ""} ${
              activeItem === item.label ? "item-white-bg" : ""
            }`}
            onClick={() => setActiveItem(item.label)}
          >
            <span className="sidebar-item-icon"></span>
            <span className="sidebar-item-text">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-add-new">
        <button className="add-new-button">
          <span className="add-new-icon">+</span>
          Add New
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
