import React from 'react';
import styles from './Display.module.scss';
import { IInputValue, IMode } from '../../types';
import { InputValueContext, ModeContext } from '../../context';

export const Display = () => {
  const { mode } = React.useContext(ModeContext) as IMode;

  const { inputValue, setInputValue } = React.useContext(InputValueContext) as IInputValue;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let num = event.target.value;
    setInputValue(num)
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
