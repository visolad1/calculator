import React from 'react';
import styles from './Display.module.scss';
import { IMode } from '../../types';
import { ModeContext } from '../../context';

export const Display = () => {
  const [displayValue, setDisplayValue] = React.useState('');
  const { mode } = React.useContext(ModeContext) as IMode;
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
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
