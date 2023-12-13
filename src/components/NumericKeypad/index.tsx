import React from 'react'
import { Box } from '../UI/Box'
import { Button } from '../UI/Button'
import styles from './NumericKeypad.module.scss'
import { IComponentsDisable } from '../../assets/types'
import { ComponentsDisableContext } from '../../assets/context'
import { useDrag } from 'react-dnd'

export const NumericKeypad = () => {
  const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable;
  const [{ isDragging }, dragRef] = useDrag({
    type: 'component',
    item: 'numericKeypad',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div draggable={componentsDisable} ref={dragRef}>
      <Box>
        <div className={styles.wrapper}>
          {nums.map(num => (
            <div className={`${styles.btn} ${num === '0' ? styles.btn_b : ''}`}><Button item={num} state={componentsDisable} /></div>
          ))}
        </div>
      </Box>
    </div>
  )
}
