import Image from 'next/image';
import Modal from '.';
import { useState } from 'react';
import SearchbarWithIcon from '../searchbarWithIcon';
import { TOKENS } from '@/app/lib/constants';
import useDebounce from '@/app/lib/hooks/useDebounce';

type SelectTokenModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SelectTokenModal: React.FC<SelectTokenModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-7">
        <div className="flex justify-between gap-2 h-full">
          <div className="">Select Token</div>
          <Image
            src={'/icons/close.svg'}
            alt="close"
            className="w-3 cursor-pointer"
            width={1000}
            height={1000}
            onClick={onClose}
          />
        </div>

        {/* searchbar */}
        <div className="my-6">
          <SearchbarWithIcon
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            setValue={(e: any) => setSearchValue(e)}
          />
        </div>

        {searchValue && (
          <p className="text-[20px] text-white72">Results</p>
        )}
        {debouncedSearchValue.length > 0 ? (
          <>
            <div className="flex flex-col gap-1 my-[13px] max-h-[280px] md:max-h-[400px] overflow-y-auto">
              {TOKENS.filter((token) =>
                token.name
                  .toLowerCase()
                  .includes(debouncedSearchValue.toLowerCase())
              ).map((token, ind) => (
                <div
                  key={ind}
                  onClick={onClose}
                  className="w-full flex items-center min-h-[62px] hover:bg-white12 px-[13px] gap-[12px] rounded-[15px] cursor-pointer"
                >
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
                      alt="token symbol"
                      className="w-[18px] h-[18px] absolute bottom-0 right-0"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="text-[18px] p-0 leading-tight">
                      {token.name}
                    </p>
                    <p className="text-[14px] uppercase text-gray p-0 leading-tight">
                      {token.symbol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {!(searchValue.length > 0) && (
          <>
            <p className="text-[20px] text-white72">
              Recent/ Popular
            </p>

            <div className="flex gap-1 my-[13px] overflow-x-auto scroll-hidden">
              {TOKENS.map((token, ind) => (
                <div
                  key={ind}
                  onClick={onClose}
                  className="min-w-[64px] flex flex-col justify-center items-center w-fit h-[72px] bg-white005 hover:bg-white12 px-[13px] gap-[6px] border-[2px] border-primary rounded-[15px] cursor-pointer"
                >
                  <div className="relative mt-1">
                    <Image
                      src={token.icon}
                      alt={token.name}
                      className="w-[24px] h-[24px]"
                      width={1000}
                      height={1000}
                    />
                    <Image
                      src="/icons/token.svg"
                      alt="close"
                      className="w-[12px] h-[12px] absolute bottom-0 right-0"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="">{token.symbol}</p>
                </div>
              ))}
            </div>

            <p className="text-[20px] text-white72">Tokens</p>

            <div className="flex flex-col gap-1 my-[13px] max-h-[280px] md:max-h-[400px] overflow-y-auto scroll-hidden pb-5">
              {TOKENS.map((token, ind) => (
                <div
                  key={ind}
                  onClick={onClose}
                  className="w-full flex items-center min-h-[62px] hover:bg-white12 px-[13px] gap-[12px]  rounded-[15px] cursor-pointer"
                >
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
                      className="w-[18px] h-[18px] absolute bottom-0 right-0"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <p className="text-[18px] p-0 leading-tight">
                      {token.name}
                    </p>
                    <p className="text-[14px] uppercase text-gray p-0 leading-tight">
                      {token.symbol}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SelectTokenModal;
