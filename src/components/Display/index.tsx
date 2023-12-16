import React from 'react';
import styles from './Display.module.scss';
import { IInputValue, IMode } from '../../types';
import { InputValueContext, ModeContext } from '../../context';

export const Display = () => {
  const [displayValue, setDisplayValue] = React.useState<string>('')
  const { inputValue, setInputValue } = React.useContext(InputValueContext) as IInputValue;
  const { mode } = React.useContext(ModeContext) as IMode;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      className={styles.input}
      placeholder='0'
      disabled={mode === 'constructor'}
    />
  );
};
