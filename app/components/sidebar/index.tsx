import React from 'react';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-black z-50 sidebar-shadow transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        onClick={onClose}
      >
        Close
      </button>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Sidebar;
