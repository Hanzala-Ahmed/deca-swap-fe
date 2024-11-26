'use client';
import { NAV_LINKS } from '@/app/lib/constants';
import { useModal } from '@/app/lib/context/modalContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '../button';
import Searchbar from '../searchbar';
import WalletButton from '../walletButton';

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const { showWalletDetailsModal, showGlobalStreamModal } =
    useModal();
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="px-5 py-4 w-full flex gap-6 md:gap-0 justify-between">
      {/* logo section with nav links */}
      <div className="flex gap-[18px] w-fit h-fit">
        <Link
          href={''}
          className="w-10 h-10 bg-white rounded-[12px] flex items-center justify-center"
        >
          <Image
            src="/assets/logo.svg"
            alt="logo"
            className="w-fit h-fit"
            width={40}
            height={40}
          />
        </Link>

        {/* navlinks */}
        <div className="w-fit h-10 border-[2px] border-primary py-[10px] px-[15px] rounded-[12px] hidden md:flex gap-[18px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="flex gap-[6px] items-center"
            >
              <Image
                src={link.icon}
                alt={link.title}
                className="w-fit h-fit"
                width={20}
                height={20}
              />
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* searchbar */}
      <div className="flex-1 md:flex hidden md:ml-[210px] items-center h-10 mx-2">
        <Searchbar
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          setValue={(e: any) => setSearchValue(e)}
        />
      </div>

      {/* live button and connect button */}
      <div className="flex gap-[10px]">
        <div
          onClick={() => {
            showGlobalStreamModal(true);
          }}
          className="relative cursor-pointer w-12 h-10 rounded-[12px] flex items-center justify-center border-primary border-[2px]"
        >
          <Image
            src="/icons/live-statistics.svg"
            alt="logo"
            className="w-6 h-6"
            width={40}
            height={40}
          />
          <div className="absolute w-[24px] h-[12px] bg-primaryRed -bottom-1.5 text-xs font-semibold uppercase flex items-center justify-center rounded-[2px]">
            LIVE
          </div>
        </div>

        {/* connect button */}
        {!walletConnected ? (
          <Button
            text="Connect"
            onClick={() => setWalletConnected(true)}
          />
        ) : (
          <WalletButton
            onClick={() => showWalletDetailsModal(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
