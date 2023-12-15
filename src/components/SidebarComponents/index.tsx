import React from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import { ICanvas, IComponentObj, IMode } from '../../types'
import { CanvasContext, ModeContext } from '../../context'
import { DraggapleComponent } from '../DraggableComponent'
import { Box } from '../UI/Box'
import styles from './SidebarComponents.module.scss'

export const SidebarComponents = () => {
  const { mode } = React.useContext(ModeContext) as IMode;
  // const { canvas } = React.useContext(CanvasContext) as ICanvas

  const componentsList: IComponentObj[] = [
    {
      id: 'display',
      component: <Display />
    },
    {
      id: 'mathOperations',
      component: <MathOperations />
    },
    {
      id: 'numericKeypad',
      component: <NumericKeypad />
    },
    {
      id: 'resultButton',
      component: <ResultButton />
    }
  ];


  return (
    <div className={`${styles.wrapper} ${mode === 'runtime' ? styles.runtime : ''}`}>
      {componentsList.map(obj => (
        <DraggapleComponent key={obj.id} id={obj.id}>
          <Box>
            <div className=''>{obj.component}</div>
          </Box>
        </DraggapleComponent>
      ))}
    </div>
  )
}
