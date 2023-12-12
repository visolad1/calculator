import React from 'react'
import { Display } from '../Display'
import { MathOperations } from '../MathOperations'
import { NumericKeypad } from '../NumericKeypad'
import { ResultButton } from '../ResultButton'
import styles from './SidebarComponents.module.scss'
import { IMode } from '../../assets/types'
import { ModeContext, ComponentsDisableContext } from '../../assets/context'

export const SidebarComponents = () => {
  const [componentsDisable, setComponentsDisable] = React.useState<boolean>(true);
  const { mode } = React.useContext(ModeContext) as IMode;


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
        <Display value={0} />
        <MathOperations />
        <NumericKeypad />
        <ResultButton />
      </ComponentsDisableContext.Provider>
    </div>
  )
}
