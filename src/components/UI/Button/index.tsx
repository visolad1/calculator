import React from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
    item: string;
    color?: string;
    state: boolean;
}

export const Button: React.FC<ButtonProps> = ({item, color, state}) => {
  console.log(state)
  return (
    <button disabled={state} className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}>{item}</button>
  )
}
