import ConversionSection from '../conversionSection';

interface Props {}

const SharePoolSection: React.FC<Props> = () => {
  return (
    <div className="w-full min-h-[167px] bg-gray border-[2px] border-primary p-[1px] relative rounded-[15px] coin-buy-clip-path">
      <div className="bg-black z-20 w-full h-full sticky left-0 top-0 px-7 py-5 rounded-[13px] coin-buy-clip-path">
        <ConversionSection />
      </div>
    </div>
  );
};

export default SharePoolSection;
