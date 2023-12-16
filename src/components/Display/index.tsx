import React from 'react';
import styles from './Display.module.scss';
import { IDisplayValue, IMode } from '../../types';
import { DisplayValueContext, ModeContext } from '../../context';

export const Display = () => {
  const { displayValue, setDisplayValue } = React.useContext(DisplayValueContext) as IDisplayValue;
  const { mode } = React.useContext(ModeContext) as IMode;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const isValidInput = inputValue.split('').every(char => /^[-+*,/0-9]$/.test(char));
    if (isValidInput) {
      setDisplayValue(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleInputChange}
      className={styles.input}
      placeholder='0'
      disabled={mode === 'constructor'}
    />
  );
};
