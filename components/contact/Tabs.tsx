"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const Tabs = () => {
  const initialTabs = [
    { name: "General Contact", isActive: false },
    { name: "Feedback", isActive: false },
    { name: "Bug Report", isActive: false },
    { name: "Feature Request", isActive: false },
  ];

  const [tabs, setTabs] = useState(initialTabs);

  const handleTabClick = (index: number) => {
    setTabs(tabs.map((tab, i) => ({ ...tab, isActive: i === index })));
  };

  return (
    <div>
      <div className='flex items-center  gap-[10px]  flex-wrap'>
        {tabs.map((tab, index) => (
          <label
            key={index}
            onClick={() => handleTabClick(index)}
            className={cn(
              "flex items-center justify-center rounded-[8px] bg-[#f4f4f4] text-black  hover:bg-[#e9e8f3] px-4 cursor-pointer transition-all duration-200 border border-[#c5d6e0] hover:text-black font-normal min-h-[36px] text-sm",
              tab.isActive && "bg-hover text-black"
            )}
          >
            <input
              type='radio'
              name='tab'
              value={tab.name}
              checked={tab.isActive}
              onChange={() => handleTabClick(index)}
              className='hidden'
            />
            <span>{tab.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
