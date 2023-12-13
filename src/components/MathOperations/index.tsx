import React from 'react';
import { Button } from '../UI/Button';
import { Box } from '../UI/Box';
import styles from './MathOperations.module.scss';
import { IComponentsDisable } from '../../assets/types';
import { ComponentsDisableContext } from '../../assets/context';
import { useDrag } from 'react-dnd';

export const MathOperations = () => {
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable
  const items = ['+', '-', '×', '/']
  const [{ isDragging }, dragRef] = useDrag({
    type: 'component',
    item: 'mathOperations',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div draggable={componentsDisable} ref={dragRef}>
      <Box>
        <div className={styles.wrapper}>
          {items.map(item => (
            <Button item={item} state={componentsDisable} />
          ))}
        </div>
      </Box>
    </div>
  )
}
