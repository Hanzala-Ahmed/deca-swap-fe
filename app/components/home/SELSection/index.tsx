'use client';

import { SEL_SECTION_TABS } from '@/app/lib/constants';
import { useToast } from '@/app/lib/context/toastProvider';
import { isNumberValid } from '@/app/lib/helper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../../button';
import Tabs from '../../tabs';
import NotifiSwapStream from '../../toasts/notifiSwapStream';
import DetailSection from '../detailSection';
import CoinBuySection from './coinBuySection';
import CoinSellSection from './coinSellSection';
import LimitSection from './limitSection';
import SwapBox from './swapBox';

const SELSection = () => {
  const [activeTab, setActiveTab] = useState(SEL_SECTION_TABS[0]);
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [isSellAmountActive, setIsSellAmountActive] = useState(false);
  const [invaliSelldAmount, setInvalidSellAmount] = useState(false);
  const [invalidBuyAmount, setInvalidBuyAmount] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [swap, setSwap] = useState(false);

  const { addToast } = useToast();

  useEffect(() => {
    if (!isNumberValid(sellAmount)) {
      setInvalidSellAmount(true);
    } else {
      setInvalidSellAmount(false);
    }

    if (!isNumberValid(buyAmount)) {
      setInvalidBuyAmount(true);
    } else {
      setInvalidBuyAmount(false);
    }
  }, [sellAmount, buyAmount]);

  return (
    <div className="md:min-w-[500px] max-w-[500px] w-[95vw] p-2">
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
        {swap ? (
          <CoinBuySection
            amount={buyAmount}
            setAmount={(val: any) => setBuyAmount(val)}
            // active={isSellAmountActive}
            inValidAmount={invalidBuyAmount}
            // setActive={setIsSellAmountActive}
            swap={swap}
          />
        ) : (
          <CoinSellSection
            amount={sellAmount}
            setAmount={(val: any) => {
              setSellAmount(val);
            }}
            // active={isSellAmountActive}
            inValidAmount={invaliSelldAmount}
            // setActive={setIsSellAmountActive}
            swap={swap}
          />
        )}
        <div
          onClick={() => setSwap(!swap)}
          className="absolute items-center flex justify-center cursor-pointer rounded-[6px] overflow-hidden right-[calc(50%_-_42px)] top-[calc(50%_-_2rem)] rotate-45"
        >
          <SwapBox active={sellAmount > 0 || buyAmount > 0} />
        </div>
        {swap ? (
          <CoinSellSection
            amount={sellAmount}
            setAmount={(val: any) => {
              setSellAmount(val);
            }}
            // active={isSellAmountActive}
            inValidAmount={invaliSelldAmount}
            // setActive={setIsSellAmountActive}
            swap={swap}
          />
        ) : (
          <CoinBuySection
            amount={buyAmount}
            setAmount={(val: any) => setBuyAmount(val)}
            // active={isSellAmountActive}
            inValidAmount={invalidBuyAmount}
            // setActive={setIsSellAmountActive}
            swap={swap}
          />
        )}
      </div>

      {/* Detail Section */}
      {buyAmount > 0 && sellAmount > 0 && (
        <DetailSection
          sellAmount={`${swap ? buyAmount : sellAmount}`}
          buyAmount={`${swap ? sellAmount : buyAmount}`}
          inValidAmount={invaliSelldAmount || invalidBuyAmount}
        />
      )}

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
    <div className="group w-8 h-8 bg-white hover:bg-tabsGradient bg-opacity-[12%] rounded-[12px] flex items-center justify-center cursor-pointer">
      <Image
        src="/icons/settings.svg"
        alt="settings"
        className="w-fit h-fit block group-hover:hidden"
        width={40}
        height={40}
      />
      <Image
        src="/icons/settings-primary.svg"
        alt="settings"
        className="w-fit h-fit hidden group-hover:block"
        width={40}
        height={40}
      />
    </div>
  );
};

export default SELSection;
