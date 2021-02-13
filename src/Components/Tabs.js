import React from "react";

function Tabs({ activeTab, tabValues, setActiveTab }) {
  return (
    <div className="tab">
      {tabValues.map((value) => (
        <div
          key={value}
          className={`tab-item ${value === activeTab ? "active-tab" : ""} `}
          onClick={() => setActiveTab(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default Tabs;
