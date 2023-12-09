import React from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
    item: string;
    color?: string;
}

export const Button: React.FC<ButtonProps> = ({item, color}) => {
  return (
    <button className={`${styles.btn} ${color === 'purple' ? styles.btn_purple : ''}`}>{item}</button>
  )
}
