import React from 'react';
import { Button } from '../UI/Button';
import { Box } from '../UI/Box';
import styles from './MathOperations.module.scss';

export const MathOperations = () => {
  const items = ['+', '-', '×', '/']
  return (
    <Box>
        <div className={styles.wrapper}>
            {items.map(item => (
              <Button item={item} />
            ))}
        </div>
    </Box>
  )
}
