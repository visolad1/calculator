import React from 'react'
import styles from './Button.module.scss';

interface ButtonProps {
    item: string;
}

export const Button: React.FC<ButtonProps> = ({item}) => {
  return (
    <button className={styles.btn}>{item}</button>
  )
}
