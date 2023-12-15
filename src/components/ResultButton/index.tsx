import React from 'react'
import { Button } from '../UI/Button'
import { IComponentsDisable } from '../../assets/types'
import { ComponentsDisableContext } from '../../assets/context'

export const ResultButton = () => {
  const { componentsDisable } = React.useContext(ComponentsDisableContext) as IComponentsDisable;
  return (
    <Button item='=' color='purple' state={componentsDisable} />

  )
}
