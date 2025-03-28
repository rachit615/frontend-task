import React, { useRef, useState, useEffect } from "react";
import "./Tabs.css";

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const tabsContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (tabsContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = tabsContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(
        scrollWidth > clientWidth && scrollLeft + clientWidth < scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScrollability();
    const resizeObserver = new ResizeObserver(checkScrollability);
    if (tabsContainerRef.current) {
      resizeObserver.observe(tabsContainerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [tabs]);

  const scroll = (direction) => {
    if (tabsContainerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -tabsContainerRef.current.clientWidth
          : tabsContainerRef.current.clientWidth;

      tabsContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="navigation-tabs-container-wrapper">
      {canScrollLeft && (
        <button
          className="navigation-arrow left-arrow"
          onClick={() => scroll("left")}
        >
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
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      )}

      <div
        className="navigation-tabs-container"
        ref={tabsContainerRef}
        onScroll={checkScrollability}
      >
        <div className="navigation-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`navigation-tab ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => onTabChange(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3" fill="#4CAF50" />
                <rect x="10" y="4" width="14" height="2" fill="#ffffff" />

                <circle cx="6" cy="12" r="3" fill="#4CAF50" />
                <rect x="10" y="10" width="14" height="2" fill="#ffffff" />

                <circle cx="6" cy="18" r="3" fill="#4CAF50" />
                <rect x="10" y="16" width="14" height="2" fill="#ffffff" />
              </svg>
              <span
                className={`tab-label ${activeTab === index ? "active" : ""} `}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {canScrollRight && (
        <button
          className="navigation-arrow right-arrow"
          onClick={() => scroll("right")}
        >
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
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Tabs;
