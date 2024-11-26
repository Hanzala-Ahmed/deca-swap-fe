'use client';
import { useState } from 'react';

type Props = {
  theme: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Tag: React.FC<Props> = ({ theme, children }) => {
  const [select, setSelected] = useState(false);
  return (
    <span
      className={`cursor-pointer px-3 rounded-[10px] flex justify-center items-center text-[15px] h-[32px] border-[2px] border-primary ${
        theme === 'primary' || select
          ? 'bg-white12 text-white'
          : 'text-white72'
      }`}
      onClick={() => {
        setSelected(!select);
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
