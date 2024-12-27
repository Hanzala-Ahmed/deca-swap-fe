'use client';
import { NAV_LINKS } from '@/app/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type MobileNavigationProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed bottom-0 left-0 h-screen w-[85vw] md:w-96 bg-black z-[60] sidebar-shadow transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
        <div
          onClick={onClose}
          className={`bg-[#232624] cursor-pointer rounded-full p-2 absolute top-6 z-50 ${
            isOpen ? '-right-3' : 'left-3'
          }`}
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

        <div className="relative h-screen overflow-hidden overflow-y-auto scroll-hidden">
          <div className="w-full h-14 border-b border-primary">
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
          </div>

          <div className="h-14 w-full px-[6px] py-[3px] flex flex-col rounded-[12px] gap-4 mt-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className={`flex gap-[6px] justify-center items-center border-[2px] border-primary py-[10px] px-[9px] rounded-[8px] ${
                  (
                    link.href === '/'
                      ? pathname === link.href
                      : pathname.startsWith(link.href) &&
                        pathname !== '/'
                  )
                    ? ' bg-primaryGradient text-black'
                    : ''
                }`}
              >
                <Image
                  src={`${
                    (
                      link.href === '/'
                        ? pathname === link.href
                        : pathname.startsWith(link.href) &&
                          pathname !== '/'
                    )
                      ? `/icons/${link.href}-black.svg`
                      : link.icon
                  }`}
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
      </div>
    </div>
  );
};

export default MobileNavigation;
