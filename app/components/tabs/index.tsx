import React, { useState, useEffect, useRef } from 'react';

type Props = {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
  tabHeight?: number;
  theme?: 'primary' | 'secondary';
  hoverStates?: boolean;
};

const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  setActiveTab,
  tabHeight,
  theme = 'primary',
  hoverStates = true,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(
    tabs.findIndex((tab: any) => tab.title === activeTab.title)
  );
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabOffset, setActiveTabOffset] = useState(0);
  const tabRefs = useRef<HTMLDivElement[]>([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const index = tabs.findIndex(
      (tab: any) => tab.title === activeTab.title
    );
    setActiveTabIndex(index);

    if (tabRefs.current[index]) {
      setActiveTabWidth(
        index === tabs.length - 1
          ? tabRefs.current[index].offsetWidth
          : tabRefs.current[index].offsetWidth
      );
      setActiveTabOffset(
        index === 0 ? 0 : tabRefs.current[index].offsetLeft
      );
    }
  }, [activeTab, tabs]);

  const handleTabClick = (tab: any, index: number) => {
    setActiveTab(tab);
    setActiveTabIndex(index);

    if (tabRefs.current[index]) {
      setActiveTabWidth(
        index === tabs.length - 1
          ? tabRefs.current[index].offsetWidth
          : tabRefs.current[index].offsetWidth
      );
      setActiveTabOffset(
        index === 0 ? 0 : tabRefs.current[index].offsetLeft
      );
    }
  };

  return (
    <div
      className={`${
        hoverStates && 'group'
      } relative p-[2px] border-[2px] border-primary flex rounded-[10px] w-full overflow-hidden`}
    >
      <div
        className={`absolute top-0 left-0 h-full ${
          theme === 'secondary'
            ? 'bg-primaryGradient text-black'
            : 'bg-white12'
        } rounded-[7px] transition-all duration-300 border-[2px] border-black`}
        style={{
          width: `${activeTabWidth}px`,
          transform: `translateX(${activeTabOffset}px)`,
        }}
      ></div>
      {tabs.map((tab: any, index: number) => (
        <div
          // onMouseEnter={() =>
          //   hoverStates && activeTabIndex === index && setHover(true)
          // }
          // onMouseLeave={() => setHover(false)}
          key={tab.title}
          ref={(el: any) => (tabRefs.current[index] = el)}
          onClick={() => handleTabClick(tab, index)}
          style={
            {
              // width: `${activeTabWidth}px !important`,
            }
          }
          className={`relative z-10 ${
            activeTabIndex === index
              ? theme === 'secondary'
                ? 'text-black'
                : 'text-white'
              : 'text-gray-500'
          } ${
            activeTabIndex !== index &&
            'hover:bg-tabsGradient hover:text-primary -z-10'
          } h-[24px] min-w-fit w-full px-[15px] rounded-[7px] cursor-pointer uppercase flex justify-center items-center ${
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
