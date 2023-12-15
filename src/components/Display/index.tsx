import React from 'react';
import styles from './Display.module.scss';
import { Box } from '../UI/Box';
import { IDisplayProps, IComponentsDisable } from '../../assets/types';
import { ComponentsDisableContext } from '../../assets/context';

export const Display: React.FC<IDisplayProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = React.useState('');
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable;
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
      disabled={componentsDisable}
    />
  );
};
