import React from 'react';
import { Button } from '../UI/Button';
import styles from './MathOperations.module.scss';

export const MathOperations = () => {
  const items = ['+', '-', '×', '/']
  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <Button item={item} />
      ))}
    </div>
  )
}
