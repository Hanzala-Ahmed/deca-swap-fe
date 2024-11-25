'use client';
import GlobalStreamModal from '@/app/components/modal/globalStreamModal';
import SelectTokenModal from '@/app/components/modal/selectTokenModal';
import WalletDetailsModal from '@/app/components/modal/walletDetailsModal';
import React, { createContext, useContext, useState } from 'react';

type ModalContextType = {
  showSelectTokenModal: (isOpen: boolean) => void;
  showWalletDetailsModal: (isOpen: boolean) => void;
  showGlobalStreamModal: (isOpen: boolean) => void;
};

const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
}) => {
  const [isSelectTokenModalOpen, setIsSelectTokenModalOpen] =
    useState(false);
  const [isWalletDetailsModalOpen, setIsWalletDetailsModalOpen] =
    useState(false);
  const [isGlobalStreamModalOpen, setIsGlobalStreamModalOpen] =
    useState(false);

  const showSelectTokenModal = (isOpen: boolean) => {
    setIsSelectTokenModalOpen(true);
  };

  const showWalletDetailsModal = (isOpen: boolean) => {
    setIsWalletDetailsModalOpen(true);
  };

  const showGlobalStreamModal = (isOpen: boolean) => {
    setIsGlobalStreamModalOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        showSelectTokenModal,
        showWalletDetailsModal,
        showGlobalStreamModal,
      }}
    >
      {children}
      {isSelectTokenModalOpen && (
        <SelectTokenModal
          isOpen={isSelectTokenModalOpen}
          onClose={() => setIsSelectTokenModalOpen(false)}
        />
      )}
      {isWalletDetailsModalOpen && (
        <WalletDetailsModal
          isOpen={isWalletDetailsModalOpen}
          onClose={() => setIsWalletDetailsModalOpen(false)}
        />
      )}
      {isGlobalStreamModalOpen && (
        <GlobalStreamModal
          isOpen={isGlobalStreamModalOpen}
          onClose={() => setIsGlobalStreamModalOpen(false)}
        />
      )}
    </ModalContext.Provider>
  );
};
