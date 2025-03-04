import InputAmount from '@/app/components/inputAmount';
import { TOKENS } from '@/app/lib/constants';
import { useModal } from '@/app/lib/context/modalContext';
import { useSidebar } from '@/app/lib/context/sidebarContext';
import Image from 'next/image';
import { useState } from 'react';

interface InputAmountProps {
  amount: number;
  setAmount: any;
  inValidAmount?: boolean;
  inputRef?: any;
  selectedToken: string;
  setSelectedToken: any;
  onInputFocus?: () => void;
}

const SelectTokenWithAmountSection: React.FC<InputAmountProps> = ({
  amount,
  setAmount,
  inValidAmount,
  inputRef,
  selectedToken,
  setSelectedToken,
  onInputFocus,
}) => {
  // const [selectedToken, setSelectedToken] = useState('');
  const { showSelectTokenModal } = useModal();

  const findedToken = TOKENS.find(
    (token) => token.name === selectedToken
  );
  return (
    <div className="w-full">
      <div className="w-full flex gap-4 justify-between mt-[12px]">
        {/* amount */}
        <div className="flex-1">
          <InputAmount
            inputRef={inputRef}
            amount={amount}
            inValidAmount={inValidAmount}
            setAmount={(val: any) => {
              setAmount(val);
            }}
            onInputFocus={onInputFocus}
          />
        </div>

        {/* select token */}
        {selectedToken ? (
          <div
            className={`min-w-[165px] group w-fit h-12 rounded-[25px] p-[2px] ${
              amount > 0 && !inValidAmount
                ? ' bg-borderGradient'
                : 'bg-[#373D3F]'
            }`}
          >
            <div
              className={`min-w-[165px] overflow-hidden w-fit h-full bg-[#0D0D0D] group-hover:bg-tabsGradient transition-colors duration-300 p-2 gap-[14px] flex rounded-[25px] items-center justify-between cursor-pointer uppercase font-bold
                `}
              onClick={() => setSelectedToken('')}
            >
              <div
                key={findedToken?.name}
                className="flex items-center w-fit h-fit"
              >
                <div className="mr-2.5 relative">
                  <Image
                    src={findedToken?.icon || ''}
                    alt={findedToken?.name || ''}
                    className="w-[85%]"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/icons/token.svg"
                    alt="close"
                    className="w-fit h-fit absolute bottom-0 right-[5px]"
                    width={20}
                    height={20}
                  />
                </div>
                <p>{findedToken?.symbol || ''}</p>
              </div>
              <Image
                src="/icons/arrow-down-white.svg"
                alt="close"
                className="w-fit h-fit mr-4"
                width={20}
                height={20}
              />
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              showSelectTokenModal(true);
              setSelectedToken('USDT');
            }}
            className="min-w-[165px] w-fit h-12 bg-primaryGradient hover:opacity-85 py-[13px] px-[20px] gap-[14px] flex rounded-[25px] items-center justify-between text-black cursor-pointer uppercase font-bold"
          >
            <p>Select Token</p>
            <Image
              src="/icons/arrow-down-black.svg"
              alt="arrow-down"
              className="w-fit h-fit"
              width={20}
              height={20}
            />
          </div>
        )}
      </div>

      {/* bottom section */}
      <div className="mt-2 w-full flex justify-between gap-3 items-center">
        <p
          className={`${
            inValidAmount ? 'text-primaryRed' : 'text-primary'
          }`}
        >
          ${amount}
        </p>
        <div className="flex gap-1.5 items-center">
          <Image
            src={'/icons/wallet.svg'}
            alt="wallet"
            className="w-fit h-fit"
            width={20}
            height={20}
          />
          <p className="text-white72">--</p>
          {findedToken && (
            <p className="uppercase text-white72">
              {findedToken.symbol}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectTokenWithAmountSection;
