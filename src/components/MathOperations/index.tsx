import React from 'react';
import { Button } from '../UI/Button';
import { Box } from '../UI/Box';
import styles from './MathOperations.module.scss';

export const MathOperations = () => {
  return (
    <Box>
        <div className={styles.wrapper}>
            <Button item='+'/>
            <Button item='-'/>
            <Button item='×'/>
            <Button item='/'/>
        </div>
    </Box>
  )
}
