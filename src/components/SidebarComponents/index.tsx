import React, { ReactComponentElement } from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'
import { IComponentObj, IMode } from '../../types'
import { ModeContext } from '../../context'
import { DraggapleComponent } from '../DraggableComponent'
import { Box } from '../UI/Box'


export const SidebarComponents = () => {
  const { mode } = React.useContext(ModeContext) as IMode;

  const componentsList: IComponentObj[] = [
    {
      id: 'display',
      component: <Display value={0} />
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

  console.log(mode)

  return (
    <div className={`${styles.wrapper} ${mode === 'runtime' ? styles.runtime : ''}`}>
      {componentsList.map(obj => (
        <Box>
          <DraggapleComponent key={obj.id} id={obj.id}>
            {obj.component}
          </DraggapleComponent>
        </Box>
      ))}
    </div>
  )
}
