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
  const { canvas } = React.useContext(CanvasContext) as ICanvas

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

  const canvasItemsId: string[] = [];

  for (let i = 0; i < canvas.length; i++) {
    canvasItemsId[i] = canvas[i].id
  }


  return (
    <div className={`${styles.wrapper} ${mode === 'runtime' ? styles.runtime : ''}`}>
      {componentsList.map(obj => (
        <Box key={obj.id} shadow={!canvasItemsId.includes(obj.id)}>
          <DraggapleComponent id={obj.id} draggable={!canvasItemsId.includes(obj.id) && mode === 'constructor'}>
            <div className={canvasItemsId.includes(obj.id) ? styles.used : ''}>
              {obj.component}
            </div>
          </DraggapleComponent>
        </Box>
      ))}
    </div>

  )
}
