import React from 'react'
import styles from './Button.module.scss';
import { IButtonProps } from '../../../types';

export const Button: React.FC<IButtonProps> = ({ item, color, state }) => {
  return (
    <button disabled={state} className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}>{item}</button>
  )
}
