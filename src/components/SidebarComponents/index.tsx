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
        canvasItemsId.includes(obj.id) && (
          <DraggapleComponent key={obj.id} id={obj.id} draggable={false}>
            <div className={styles.used}>{obj.component}</div>
          </DraggapleComponent>
        ) || <DraggapleComponent key={obj.id} id={obj.id} draggable={true}>
          <Box>
            <div>{obj.component}</div>
          </Box>
        </DraggapleComponent>
      ))}
    </div>
  )
}
