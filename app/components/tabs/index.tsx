type Props = {
  tabs: any;
  activeTab: any;
  setActiveTab: any;
  tabHeight?: number;
};

const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  setActiveTab,
  tabHeight,
}) => {
  return (
    <div className="p-[2px] border-[2px] border-primary flex gap-3 rounded-[10px]">
      {tabs.map((tab: any) => (
        <div
          key={tab.title}
          onClick={() => setActiveTab(tab)}
          className={`${
            activeTab.title === tab.title && 'bg-white12'
          } h-[24px] w-full px-[15px] rounded-[7px] cursor-pointer uppercase flex justify-center items-center ${
            tabHeight ? `h-[${tabHeight}px]` : 'h-[24px]'
          }`}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
