import Image from 'next/image';
import SelectTokenWithAmountSection from '../SelectTokenWithAmountSection';
import { use, useRef, useState } from 'react';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';

interface Props extends InputAmountProps {
  // active: boolean;
  // setActive: (active: boolean) => void;
  inValidAmount?: boolean;
}

interface InputAmountProps {
  amount: number;
  setAmount: (amount: number) => void;
  swap?: boolean;
}

const CoinSellSection: React.FC<Props> = ({
  amount,
  setAmount,
  // active,
  // setActive,
  inValidAmount,
  swap,
}) => {
  const [active, setActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(sectionRef, () => {
    setActive(false);
  });

  return (
    <div
      ref={sectionRef}
      className="w-fit h-fit relative"
      onMouseEnter={() => setActive(true)}
    >
      {amount > 0 && !inValidAmount && active && (
        <Image
          src="/assets/valid-amount-succes.svg"
          alt="valid"
          className={`w-[95vw] md:w-full h-full scale-y-[160%] -z-10 scale-x-[110%] sm:scale-[123%] absolute left-0 top-0 ${
            amount > 0 ? 'blink-animation' : ''
          }`}
          width={20}
          height={20}
        />
      )}
      <div
        className={`w-full min-h-[150px] md:min-h-[167px] rounded-[15px] p-[2px] relative ${
          swap ? 'coin-buy-clip-path' : 'coin-sell-clip-path'
        } ${
          amount > 0 && !inValidAmount && active
            ? 'bg-primary'
            : inValidAmount
            ? 'bg-primaryRed'
            : 'bg-gray'
        }`}
        // onClick={() => setActive(!active)}
      >
        <div
          className={`w-full h-full z-20 sticky left-0 top-0 px-7 py-5 rounded-[13px] ${
            swap ? 'coin-buy-clip-path' : 'coin-sell-clip-path'
          } ${
            amount > 0 && !inValidAmount && active
              ? 'bg-gradient-to-r from-[#071310] to-[#062118]'
              : 'bg-[#0D0D0D]'
          } ${amount > 0 && !inValidAmount && active && 'dotsbg'}`}
        >
          {/* title */}
          <p className="uppercase text-white72 text-[18px]">SELL</p>

          <div className="w-full h-full">
            <SelectTokenWithAmountSection
              amount={amount}
              setAmount={setAmount}
              inValidAmount={inValidAmount}
              inputRef={sectionRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinSellSection;
