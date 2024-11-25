'use client';

import { SEL_SECTION_TABS } from '@/app/lib/constants';
import { useToast } from '@/app/lib/context/toastProvider';
import Image from 'next/image';
import { useState } from 'react';
import Button from '../../button';
import Tabs from '../../tabs';
import DetailSection from '../detailSection';
import CoinBuySection from './coinBuySection';
import CoinSellSection from './coinSellSection';
import LimitSection from './limitSection';
import SwapBox from './swapBox';
import NotifiSwapStream from '../../toasts/notifiSwapStream';

const SELSection = () => {
  const [activeTab, setActiveTab] = useState(SEL_SECTION_TABS[0]);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [isSellAmountActive, setIsSellAmountActive] = useState(false);
  const [invaliSelldAmount, setInvalidSellAmount] = useState(false);
  const [invalidBuyAmount, setInvalidBuyAmount] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const { addToast } = useToast();

  return (
    <div className="md:min-w-[500px] max-w-[500px] w-[100vw] p-2">
      <div className="w-full flex justify-between gap-2 mb-4">
        <Tabs
          tabs={SEL_SECTION_TABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* setting button */}
        <SettingButton />
      </div>

      {activeTab.title === 'Limit' && (
        <LimitSection
          active={isSellAmountActive}
          setActive={setIsSellAmountActive}
        />
      )}
      <div className="w-full mt-4 flex flex-col relative gap-[23px]">
        <CoinSellSection
          amount={sellAmount}
          setAmount={(val: any) => {
            setSellAmount(val);
          }}
          active={isSellAmountActive}
          inValidAmount={invaliSelldAmount}
          setActive={setIsSellAmountActive}
        />
        <div className="absolute items-center flex justify-center rounded-[6px] overflow-hidden right-[calc(50%_-_42px)] top-[calc(50%_-_2rem)] rotate-45">
          <SwapBox active={sellAmount > 0 || buyAmount > 0} />
        </div>
        <CoinBuySection
          amount={buyAmount}
          setAmount={(val: any) => setBuyAmount(val)}
          active={isSellAmountActive}
          inValidAmount={invalidBuyAmount}
          setActive={setIsSellAmountActive}
        />
      </div>

      {/* Detail Section */}
      <DetailSection
        sellAmount={`${sellAmount}`}
        buyAmount={`${buyAmount}`}
        inValidAmount={invaliSelldAmount || invalidBuyAmount}
      />

      <div className="w-full my-[30px]">
        {isWalletConnected ? (
          <Button
            text="Swap"
            theme="gradient"
            onClick={() => addToast(<NotifiSwapStream />)}
            error={invaliSelldAmount || invalidBuyAmount}
          />
        ) : (
          <Button
            text="Connect Wallet"
            // onClick={() => addToast(<NotifiSwapStream />)}
            onClick={() => setIsWalletConnected(true)}
            error={invaliSelldAmount || invalidBuyAmount}
          />
        )}
      </div>
    </div>
  );
};

const SettingButton = () => {
  return (
    <div className="w-8 h-8 bg-white bg-opacity-[12%] rounded-[12px] flex items-center justify-center cursor-pointer">
      <Image
        src="/icons/settings.svg"
        alt="settings"
        className="w-fit h-fit"
        width={40}
        height={40}
      />
    </div>
  );
};

export default SELSection;
