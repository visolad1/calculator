import React from 'react';
import styles from './Display.module.scss';
import { IDisplayProps, IComponentsDisable } from '../../types';
import { ComponentsDisableContext } from '../../context';

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
