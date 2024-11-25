import {
  formatCustomTime,
  formatWalletAddress,
} from '@/app/lib/helper';
import Image from 'next/image';

type Props = {
  status: 'ongoing' | 'scheduled' | 'completed';
  stream: {
    sell: { amount: number; token: string };
    buy: { amount: number; token: string };
  }[];
  date: Date;
  walletAddress?: string;
};

const StreamCard: React.FC<Props> = ({
  status,
  stream,
  date,
  walletAddress,
}) => {
  const renderStreams = (streams: Props['stream']) => {
    if (streams.length > 4) {
      const firstThree = streams.slice(0, 3);
      const lastOne = streams[streams.length - 1];
      return (
        <>
          {firstThree.map((s, i) => renderStreamLine(s, i))}
          <p>....</p>
          {renderStreamLine(lastOne, streams.length - 1)}
        </>
      );
    } else {
      return streams.map((s, i) => renderStreamLine(s, i));
    }
  };

  const renderStreamLine = (
    stream: Props['stream'][0],
    index: number
  ) => (
    <div className="flex text-white72" key={index}>
      <p>
        {stream.sell.amount} {stream.sell.token}
      </p>
      <Image
        src="/icons/right-arrow.svg"
        width={20}
        height={20}
        alt="arrow"
        className="w-3 mx-1.5"
      />
      <p>
        {stream.buy.amount} {stream.buy.token}
      </p>
    </div>
  );

  return (
    <div className="w-full p-4 border-[1px] border-white12 rounded-[15px]">
      <div className="w-full flex justify-between gap-1 items-center">
        <div
          className={`${
            status === 'ongoing'
              ? 'bg-ongoing'
              : status === 'scheduled'
              ? 'bg-scheduled'
              : 'bg-primary'
          } py-0.5 px-1 rounded-[4px] uppercase text-black text-[12px]`}
        >
          {status}
        </div>
        {walletAddress && (
          <p
            className={`${
              status === 'ongoing'
                ? 'text-ongoing'
                : status === 'scheduled'
                ? 'text-scheduled'
                : 'text-primary'
            } underline text-[14px]`}
          >
            {formatWalletAddress(walletAddress)}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1 mt-2.5">
        {renderStreams(stream)}
      </div>

      <div className="mt-1.5 text-[14px] text-white72">
        {formatCustomTime(date)}
      </div>
    </div>
  );
};

export default StreamCard;
