import React from 'react'
import styles from './Button.module.scss';
import { IButtonProps, IInputValue } from '../../../types';
import { InputValueContext, ModeContext } from '../../../context';
import { IMode } from '../../../types';

export const Button: React.FC<IButtonProps> = ({ item, color }) => {
  const { mode } = React.useContext(ModeContext) as IMode
  const { inputValue, setInputValue } = React.useContext(InputValueContext) as IInputValue

  return (
    <button
      disabled={mode === 'constructor'}
      className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}
      onClick={() => setInputValue(inputValue + item)}
    >
      {item}
    </button>
  )
}
