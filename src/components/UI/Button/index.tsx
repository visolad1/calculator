import React from 'react'
import styles from './Button.module.scss';
import { IButtonProps } from '../../../types';
import { ModeContext } from '../../../context';
import { IMode } from '../../../types';

export const Button: React.FC<IButtonProps> = ({ item, color }) => {
  const { mode } = React.useContext(ModeContext) as IMode
  return (
    <button disabled={mode === 'constructor'} className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}>{item}</button>
  )
}
