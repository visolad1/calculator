import React from 'react'
import { Box } from '../UI/Box'
import { Button } from '../UI/Button'
import { IComponentsDisable } from '../../assets/types'
import { ComponentsDisableContext } from '../../assets/context'
import { useDrag } from 'react-dnd'

export const ResultButton = () => {
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable;
  const [{ isDragging }, dragRef] = useDrag({
    type: 'component',
    item: 'resultButton',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div draggable={componentsDisable} ref={dragRef}>
      <Box>
        <Button item='=' color='purple' state={componentsDisable} />
      </Box>
    </div>
  )
}
