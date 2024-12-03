'use client';

import { SEL_SECTION_TABS } from '@/app/lib/constants';
import { isNumberValid } from '@/app/lib/helper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from '../../button';
import DetailSection from '../../home/detailSection';
import AddLiquidtySection from './addLiquiditySection';
import EqualBox from './equalBox';
import LimitSection from './sharePoolSection';

const AddLiquidity = () => {
  const [sellAmount, setSellAmount] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);
  const [isAddLiquidityAmountActive, SetIsAddLiquidityAmountActive] =
    useState(false);
  const [invaliSelldAmount, setInvalidSellAmount] = useState(false);
  const [invalidBuyAmount, setInvalidBuyAmount] = useState(false);

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
      <div className="w-full flex justify-end gap-2 mb-4">
        {/* setting button */}
        <SettingButton />
      </div>

      <div className="w-full mt-4 flex flex-col relative gap-[23px]">
        <AddLiquidtySection
          amount={sellAmount}
          setAmount={(val: any) => {
            setSellAmount(val);
          }}
          active={isAddLiquidityAmountActive}
          inValidAmount={invaliSelldAmount}
          setActive={SetIsAddLiquidityAmountActive}
        />
        <div className="absolute items-center flex justify-center rounded-[6px] overflow-hidden right-[calc(50%_-_42px)] top-[calc(50%_-_2rem)] rotate-45">
          <EqualBox active={sellAmount > 0 || buyAmount > 0} />
        </div>
        <LimitSection />
      </div>

      {/* Detail Section */}
      <DetailSection
        sellAmount={`${sellAmount}`}
        buyAmount={`${buyAmount}`}
        inValidAmount={invaliSelldAmount || invalidBuyAmount}
      />

      <div className="w-full my-[30px]">
        <Button theme="gradient" text="Confirm Liquidity" />
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

export default AddLiquidity;
