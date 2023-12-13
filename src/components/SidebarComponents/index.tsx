import React, { ReactComponentElement } from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'
import { IMode, IComponentObj } from '../../assets/types'
import { ModeContext, ComponentsDisableContext } from '../../assets/context'


export const SidebarComponents = () => {
  const [componentsDisable, setComponentsDisable] = React.useState<boolean>(true);
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
  ]


  React.useEffect(() => {
    if (mode === 'constructor') {
      setComponentsDisable(true);
    } else if (mode === 'runtime') {
      setComponentsDisable(false)
    }
  }, [mode]);

  return (
    <div className={styles.wrapper}>
      <ComponentsDisableContext.Provider value={{ componentsDisable, setComponentsDisable }}>
        {componentsList.map(({ id, component }, index) => (
          <div key={id}>{component}</div>
        ))}


      </ComponentsDisableContext.Provider>
    </div>
  )
}
