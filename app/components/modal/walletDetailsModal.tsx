import { TOKENS, WALLET_TABS } from '@/app/lib/constants';
import { formatWalletAddress } from '@/app/lib/helper';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '.';
import SwapStream from '../swapStream';
import Tabs from '../tabs';
import AmountTag from '../amountTag';
import StreamCard from '../streamCard';

type WalletDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WalletDetailsModal: React.FC<WalletDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState(WALLET_TABS[0]);
  const [isStreamDetailsOpen, setIsStreamDetailsOpen] =
    useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* close icon */}
      <div
        onClick={onClose}
        className="bg-[#232624] cursor-pointer rounded-full p-2 absolute top-6 -left-3 z-50"
      >
        <Image
          src={'/icons/close.svg'}
          alt="close"
          className="w-2"
          width={1000}
          height={1000}
          onClick={onClose}
        />
      </div>

      {/* main content */}
      <div className="relative max-h-[95vh] overflow-hidden overflow-y-auto">
        <div className="flex justify-between gap-2 h-full sticky bg-black top-0 p-6 rounded-2xl z-40">
          {isStreamDetailsOpen ? (
            <>
              <div
                className="flex gap-1 text-white72 cursor-pointer"
                onClick={() => setIsStreamDetailsOpen(false)}
              >
                <Image
                  src={'/icons/right-arrow.svg'}
                  alt="back"
                  className="w-2.5 rotate-180"
                  width={1000}
                  height={1000}
                  onClick={() => setIsStreamDetailsOpen(false)}
                />
                <p>Back</p>
              </div>
              <p className="underline text-primary">
                {formatWalletAddress('GY68234nasmd234asfKT21')}
              </p>
            </>
          ) : (
            <>
              <div className="flex gap-3 items-center">
                <div className="relative h-fit">
                  <Image
                    src={'/icons/token.svg'}
                    alt="coin"
                    className="w-8 h-8"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    src="/icons/token-icon.svg"
                    alt="token symbol"
                    className="w-4 h-4 absolute bottom-0 right-0"
                    width={200}
                    height={200}
                  />
                </div>
                <p className="text-white72">
                  {formatWalletAddress('GY68234nasmd234asfKT21')}
                </p>
              </div>
              <Image
                src={'/icons/switchoff.svg'}
                alt="close"
                className="w-6 cursor-pointer"
                width={1000}
                height={1000}
                onClick={onClose}
              />
            </>
          )}
        </div>

        {/* wallet amount details */}
        <div className="px-6 pb-6">
          {isStreamDetailsOpen ? (
            <>
              <div className="p-4 rounded-[15px] bg-white005">
                <TokenBar sellToken="ETH" buyToken="USDC" />
                <div className="flex gap-2 justify-between py-4 border-b border-borderBottom">
                  <div className="flex flex-col leading-tight gap-0.5 items-start">
                    <p className="text-white72">1 ETH</p>
                    <p className="text-white52 text-[14px]">$3,395</p>
                  </div>
                  <div className="flex flex-col leading-tight gap-0.5 items-end">
                    <p className="text-white72">~ 3,300 USDC</p>
                    <p className="text-white52 text-[14px]">$3,301</p>
                  </div>
                </div>

                <div className="flex gap-2 justify-between py-4 border-b border-borderBottom">
                  <div className="flex flex-col leading-tight gap-0.5 items-start">
                    <p className="text-[14px] text-white72">
                      Swapped Input
                    </p>
                    <p className="">1 ETH</p>
                    <p className="text-white52 text-[14px]">$3,395</p>
                  </div>
                  <Image
                    src={'/icons/long-right-arrow.svg'}
                    alt="arrow"
                    className="w-6"
                    width={1000}
                    height={1000}
                  />
                  <div className="flex flex-col leading-tight gap-0.5 items-end">
                    <p className="text-[14px] text-white72">Output</p>
                    <p className="">$1,550 USDC</p>
                    <p className="text-white52 text-[14px]">$1,551</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                  <AmountTag
                    title="Limit"
                    amount={'1 ETH = 0.0000 USDC'}
                    infoDetail="Estimated"
                  />
                  <AmountTag
                    title="Streams Completed"
                    amount={'4/6'}
                    infoDetail="Estimated"
                  />
                  <AmountTag
                    title="Est time"
                    amount={'19min 2 sec'}
                    infoDetail="Estimated"
                  />
                  <AmountTag
                    title="Output Fee"
                    amount={'$190.54'}
                    infoDetail="Estimated"
                  />
                  <AmountTag
                    title="Wallet Address"
                    amount={formatWalletAddress('0X2A324324324642F')}
                    infoDetail="Estimated"
                  />
                </div>
              </div>
              <div className="mt-7">
                <p className="text-[20px] pb-3.5">Streams</p>

                <StreamCard
                  status="ongoing"
                  stream={[
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                  ]}
                  date={new Date()}
                  walletAddress="0X2A324324324642F"
                />
                <StreamCard
                  status="scheduled"
                  stream={[
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                  ]}
                  date={new Date()}
                />
                <StreamCard
                  status="completed"
                  stream={[
                    {
                      sell: {
                        amount: 1,
                        token: 'ETH',
                      },
                      buy: {
                        amount: 3300,
                        token: 'USDC',
                      },
                    },
                  ]}
                  date={new Date()}
                  walletAddress="0X2A324324324642F"
                />
              </div>
            </>
          ) : (
            <>
              <div className="">
                <p className="text-[36px] font-bold">$915.56</p>
                {/* progress */}
                <div className="flex gap-1.5 text-white72 text-[14px]">
                  <Image
                    src={'/icons/progress-down.svg'}
                    alt="progress"
                    className="w-2.5"
                    width={1000}
                    height={1000}
                  />
                  <p className="">$22.39 (2.39%)</p>
                  <p>Today</p>
                </div>
              </div>

              {/* LP Positions */}
              <div className="mt-7 bg-white005 py-4 px-3.5 rounded-[15px]">
                <div className="flex text-white72 gap-1 items-center">
                  <p className="">LP Positions</p>
                  <Image
                    src={'/icons/right-arrow.svg'}
                    alt="arrow-lp"
                    className="w-3 mt-1"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="text-[20px]">$999,999.99</p>
                <div className="flex gap-1 text-white72">
                  <p className="">Reward: </p>
                  <p className="">$22.39 </p>
                </div>
              </div>

              {/* tabs */}
              <div className="mt-[34px] w-full">
                <Tabs
                  tabs={WALLET_TABS}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  tabHeight={32}
                />
              </div>

              {/* ongoing streams */}
              {activeTab == WALLET_TABS[0] ? (
                <div>
                  <div className="mt-4">
                    <p className="text-[20px]">Ongoing Streams</p>
                    <div className="flex flex-col gap-2.5 mt-4">
                      <SwapStream
                        onClick={() => setIsStreamDetailsOpen(true)}
                      />
                      <SwapStream
                        onClick={() => setIsStreamDetailsOpen(true)}
                      />
                    </div>
                  </div>

                  {/* Past Streams */}
                  <div className="mt-4">
                    <p className="text-[20px]">Past Streams</p>
                    {/* ongoing streams */}
                    <div className="flex flex-col gap-2.5 mt-4">
                      <SwapStream
                        onClick={() => setIsStreamDetailsOpen(true)}
                        limit={true}
                        limitContent={'1 ETH = 0.1111545 USDC'}
                      />
                      <SwapStream
                        onClick={() => setIsStreamDetailsOpen(true)}
                        limit={true}
                        limitContent={'1 ETH = 0.1111545 USDC'}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2.5 my-[13px]">
                  {TOKENS.map((token, ind) => (
                    <div
                      key={ind}
                      className="w-full flex items-center justify-between border border-white14 bg-white005 hover:bg-white12 p-4 rounded-[15px] cursor-pointer"
                    >
                      <div className="flex gap-[12px]">
                        <div className="relative h-fit">
                          <Image
                            src={token.icon}
                            alt={token.name}
                            className="w-[40px] h-[40px]"
                            width={1000}
                            height={1000}
                          />
                          <Image
                            src="/icons/token.svg"
                            alt="close"
                            className="w-[18px] h-[18px] absolute bottom-0 right-0 z-10"
                            width={20}
                            height={20}
                          />
                        </div>
                        <div>
                          <p className="text-[18px] p-0 leading-tight">
                            {token.symbol}
                          </p>
                          <p className="text-[14px] uppercase text-gray p-0 leading-tight">
                            {token.value}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end">
                        {
                          <p
                            className={`text-[16px] p-0 leading-tight ${
                              token.status == 'increase'
                                ? 'text-primary'
                                : 'text-primaryRed'
                            }`}
                          >
                            {`${
                              token.status == 'increase' ? '+' : '-'
                            } ${token.statusAmount}`}
                          </p>
                        }
                        {/* {token.status == 'increase' ? ( */}
                        <div className="flex gap-1 items-center">
                          <Image
                            src={
                              token.status == 'increase'
                                ? '/icons/progress-up.svg'
                                : '/icons/progress-down.svg'
                            }
                            alt="progress"
                            className="w-2"
                            width={1000}
                            height={1000}
                          />
                          <p className="text-[14px]">
                            {`${token.statusAmount} (2.39%)`}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

const TokenBar: React.FC<{ sellToken: string; buyToken: string }> = ({
  sellToken,
  buyToken,
}) => {
  const getTokenImagePath = (token: string) =>
    `/tokens/${token.toLowerCase()}.svg`;

  return (
    <div className="flex items-center justify-center relative">
      {/* Sell Token */}
      <div className="flex items-center justify-center">
        <div className="bg-green-300 rounded-full p-0.5">
          <Image
            src={getTokenImagePath(sellToken)}
            alt={sellToken}
            width={40}
            height={40}
            className="border-[1.5px] border-black w-[30px] rounded-full"
          />
        </div>
      </div>

      {/* Connector Line */}
      <div className="flex-auto border-t-2 border-green-200 relative">
        <div className="bg-gray rounded-full p-0.5 absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Image
            src={'/icons/unicorn.svg'}
            alt={sellToken}
            width={40}
            height={40}
            className="border-[1.5px] border-black w-[28px] h-[28px] rounded-full"
          />
        </div>
      </div>

      {/* Buy Token */}
      <div className="flex items-center justify-center">
        <div className="bg-blue-300 rounded-full p-0.5">
          <Image
            src={getTokenImagePath(buyToken)}
            alt={buyToken}
            width={40}
            height={40}
            className="border-[1.5px] border-black w-[30px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletDetailsModal;