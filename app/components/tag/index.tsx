type Props = {
  theme: 'primary' | 'secondary';
  children: React.ReactNode;
};

const Tag: React.FC<Props> = ({ theme, children }) => {
  return (
    <span
      className={`px-3 rounded-[10px] flex justify-center items-center text-[15px] h-[32px] border-[2px] border-primary ${
        theme === 'primary' ? 'bg-white12 text-white' : 'text-white72'
      }`}
    >
      {children}
    </span>
  );
};

export default Tag;
