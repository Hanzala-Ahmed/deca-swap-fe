import Image from 'next/image';
import { useState } from 'react';

type Props = {
  active: boolean;
};

const SwapBox: React.FC<Props> = ({ active = false }) => {
  return (
    <div className="w-16 h-16 overflow-hidden flex gap-4 p-2">
      <div
        className={`w-full h-full rounded-[4px] flex justify-center items-center p-1 ${
          active
            ? 'bg-gradient-to-r from-[#071310] to-[#062118]'
            : 'bg-white12'
        }`}
      >
        <Image
          src={
            active
              ? '/icons/swap-arrows-green.svg'
              : '/icons/swap-arrows.svg'
          }
          alt="swap"
          className="-rotate-45 w-5"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default SwapBox;
