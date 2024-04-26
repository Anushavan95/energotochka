"use client";

import { useState } from "react";

const Tabs = ({ tabs }: any) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex">
        {tabs.map((tab: any, index: number) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              index === activeTab
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } py-2 px-4 mr-2 rounded`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
