import React from 'react';
import styles from './Display.module.scss';

interface DisplayProps{
    value: number
}

export const Display: React.FC<DisplayProps> = ({value}) => {
  return (
    <input 
        type="text"
        value={value}
        readOnly
        className={styles.input}
    />
  )
}
