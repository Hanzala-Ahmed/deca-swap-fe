import { useState } from 'react';

interface InputAmountProps {
  amount: number;
  setAmount: (value: any) => void;
  disable?: boolean;
  textAlignRight?: boolean;
  inValidAmount?: boolean;
}

const InputAmount: React.FC<InputAmountProps> = ({
  amount,
  setAmount,
  disable = false,
  textAlignRight = false,
  inValidAmount,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value: string) => {
    let cleanValue = value.replace(/,/g, '');
    if (
      cleanValue.startsWith('0') &&
      cleanValue !== '0' &&
      !cleanValue.startsWith('0.')
    ) {
      cleanValue = cleanValue.replace(/^0+/, '');
    }
    const formattedValue = formatValue(cleanValue, true);
    setAmount(cleanValue);
    setInputValue(formattedValue);
  };

  const handleBlur = () => {
    const numericValue = inputValue.replace(/,/g, '');
    if (numericValue === '') {
      setAmount(0);
      setInputValue('0');
    } else {
      const num = parseFloat(numericValue);
      if (!isNaN(num)) {
        if (num === Infinity) {
          setAmount(Number.MAX_SAFE_INTEGER);
          setInputValue(formatValue(Number.MAX_SAFE_INTEGER));
        } else {
          setAmount(num);
          setInputValue(formatValue(num));
        }
      }
    }
  };

  const formatValue = (
    value: string | number,
    isIntermediate = false
  ) => {
    if (typeof value === 'string' && isIntermediate && value !== '') {
      if (value === '-') return value;
      const num = parseFloat(value);
      if (isNaN(num)) return value;
    }
    const num = Number(value);
    if (num === 0) return '0';
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: isIntermediate
        ? 0
        : num % 1 !== 0
        ? 2
        : 0,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <input
      type="text"
      value={
        (parseFloat(inputValue) || parseFloat(formatValue(amount))) >
        0
          ? inputValue || formatValue(amount)
          : ''
      }
      placeholder="0"
      onChange={(e) => handleChange(e.target.value)}
      onBlur={handleBlur}
      disabled={disable}
      className={`w-full placeholder:text-white disabled:opacity-55 h-full bg-transparent border-none outline-none placeholder:text-gray text-[30px] md:text-[42px] ${
        textAlignRight ? 'text-right' : ''
      } ${inValidAmount ? 'text-primaryRed' : ''}`}
    />
  );
};

export default InputAmount;
