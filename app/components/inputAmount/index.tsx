import React from 'react';
import { NumericFormat } from 'react-number-format';

interface InputAmountProps {
  amount: number;
  setAmount?: (value: number) => void;
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
  // Handler to update the amount
  const handleValueChange = (values: any) => {
    const { floatValue } = values;
    if (setAmount) setAmount(floatValue || 0);
  };

  return (
    <NumericFormat
      value={amount}
      displayType={'input'}
      thousandSeparator={true}
      // decimalScale={2}
      fixedDecimalScale={true}
      onValueChange={handleValueChange}
      placeholder="0"
      disabled={disable}
      className={`w-full placeholder:text-white disabled:opacity-55 h-full bg-transparent border-none outline-none placeholder:text-gray text-[30px] md:text-[42px] ${
        textAlignRight ? 'text-right' : ''
      } ${inValidAmount ? 'text-primaryRed' : ''}`}
    />
  );
};

export default InputAmount;
