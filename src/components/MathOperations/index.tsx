import React from 'react';
import { Button } from '../UI/Button';
import { Box } from '../UI/Box';
import styles from './MathOperations.module.scss';
import { IComponentsDisable } from '../../assets/types';
import { ComponentsDisableContext } from '../../assets/context';

export const MathOperations = () => {
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable
  const items = ['+', '-', '×', '/']
  return (
    <Box>
      <div className={styles.wrapper}>
        {items.map(item => (
          <Button item={item} state={componentsDisable} />
        ))}
      </div>
    </Box>
  )
}
