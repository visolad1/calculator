import React from 'react';
import styles from './Display.module.scss';
import { Box } from '../UI/Box';

interface DisplayProps{
    value: number
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(event.target.value);
  };

  return (
    <Box>
      <input
        type="text"
        value={displayValue}
        onChange={handleInputChange}
        className={styles.input}
        placeholder='0'
      />
    </Box>
  );
};