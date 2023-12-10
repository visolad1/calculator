import React from 'react'
import { Box } from '../UI/Box'
import { Button } from '../UI/Button'
import { ComponentsDisableContext, IComponentsDisable } from '../SidebarComponents'

export const ResultButton = () => {
  const {componentsDisable} = React.useContext(ComponentsDisableContext) as IComponentsDisable;
  return (
    <Box>
        <Button item='=' color='purple' state={componentsDisable}/>
    </Box>
  )
}
