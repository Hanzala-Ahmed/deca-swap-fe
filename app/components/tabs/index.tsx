import React, { useState, useEffect, useRef } from 'react';

type Props = {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
  tabHeight?: number;
  theme?: 'primary' | 'secondary';
};

const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  setActiveTab,
  tabHeight,
  theme = 'primary',
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    tabs.findIndex((tab: any) => tab.title === activeTab.title)
  );
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabOffset, setActiveTabOffset] = useState(0);
  const tabRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Update the active tab dimensions when the activeTab changes
    const index = tabs.findIndex(
      (tab: any) => tab.title === activeTab.title
    );
    setActiveTabIndex(index);

    if (tabRefs.current[index]) {
      setActiveTabWidth(tabRefs.current[index].offsetWidth);
      setActiveTabOffset(tabRefs.current[index].offsetLeft);
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: any, index: number) => {
    setActiveTab(tab);
    setActiveTabIndex(index);

    if (tabRefs.current[index]) {
      setActiveTabWidth(tabRefs.current[index].offsetWidth);
      setActiveTabOffset(tabRefs.current[index].offsetLeft);
    }
  };

  return (
    <div className="relative p-[2px] border-[2px] border-primary flex rounded-[10px]">
      <div
        className={`absolute top-0 left-0 h-full ${
          theme === 'secondary'
            ? 'bg-primaryGradient text-black'
            : 'bg-white12'
        } rounded-[7px] transition-all duration-300`}
        style={{
          width: `${activeTabWidth}px`,
          transform: `translateX(${activeTabOffset}px)`,
        }}
      ></div>
      {tabs.map((tab: any, index: number) => (
        <div
          key={tab.title}
          ref={(el: any) => (tabRefs.current[index] = el!)}
          onClick={() => handleTabClick(tab, index)}
          className={`relative z-10 ${
            activeTabIndex === index
              ? theme === 'secondary'
                ? 'text-black'
                : 'text-white'
              : 'text-gray-500'
          } h-[24px] min-w-fit px-[15px] rounded-[7px] cursor-pointer uppercase flex justify-center items-center ${
            tabHeight ? `h-[${tabHeight}px]` : 'h-[24px]'
          } transition-colors duration-300`}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
