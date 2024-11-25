type Props = {
  text: string;
  onClick?: () => void;
  error?: boolean;
  theme?:
    | 'gradient'
    | 'primary'
    | 'secondary'
    | 'white'
    | 'black'
    | 'success';
};

const Button: React.FC<Props> = ({ text, onClick, error, theme }) => {
  return (
    <button
      onClick={onClick}
      disabled={error}
      className={`min-w-[130px] w-full p-2 h-10 bg-opacity-[23%] rounded-[12px] flex items-center justify-center uppercase ${
        error
          ? 'text-primaryRed border-error border-[2px]'
          : theme == 'gradient'
          ? 'bg-primaryGradient text-black'
          : 'bg-secondary text-primary'
      }`}
    >
      {`${error ? 'Error Also Here' : text}`}
    </button>
  );
};

export default Button;
