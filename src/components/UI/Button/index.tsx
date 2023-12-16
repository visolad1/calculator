import React from 'react'
import styles from './Button.module.scss';
import { IButtonProps, IDisplayValue } from '../../../types';
import { DisplayValueContext, ModeContext } from '../../../context';
import { IMode } from '../../../types';

export const Button: React.FC<IButtonProps> = ({ item, color }) => {
  const { mode } = React.useContext(ModeContext) as IMode
  const { displayValue, setDisplayValue } = React.useContext(DisplayValueContext) as IDisplayValue

  return (
    <button
      disabled={mode === 'constructor'}
      className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}
      onClick={() => setDisplayValue(displayValue + item)}
    >
      {item}
    </button>
  )
}
